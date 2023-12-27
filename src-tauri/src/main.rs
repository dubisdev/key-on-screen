// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod app;
use app::listen_key;
use app::tray;

use tauri::Manager;

#[derive(Clone, serde::Serialize)]
struct Payload {
    args: Vec<String>,
    cwd: String,
}

fn main() {
    let tauri_app = tauri::Builder::default();
    let tray = tray::create_tray_menu();

    tauri_app
        // .plugin(tauri_plugin_window_state::Builder::default().build())
        .setup(|app| {
            let handle = app.handle();
            listen_key::create_device_query_listener(handle);
            Ok(())
        })
        // This is required to get tray-relative positions to work
        .on_window_event(|event| {
            if let tauri::WindowEvent::CloseRequested { api, .. } = event.event() {
                if event.window().title().unwrap() == "Settings" {
                    return;
                }
                event.window().hide().unwrap();
                api.prevent_close();
            }
        })
        .plugin(tauri_plugin_single_instance::init(|app, argv, cwd| {
            app.emit_all("single-instance", Payload { args: argv, cwd })
                .unwrap();
        }))
        .system_tray(tray)
        .on_system_tray_event(|app, event| {
            tray::on_tray_event(app, event);
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
