// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod app;
use app::listen_key;

fn main() {
    let tauri_app = tauri::Builder::default();

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
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
