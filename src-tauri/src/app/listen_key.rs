use crate::app::get_key;
use rdev::{listen, Event, EventType};
use tauri::Manager;

pub fn create_device_query_listener(handle: tauri::AppHandle) {
    std::thread::spawn(move || {
        let callback = move |event: Event| {
            if let EventType::KeyRelease(key) = event.event_type {
                let key_name = get_key::get_key(key);
                handle
                    .emit_to("main", "KeyRelease", key_name)
                    .expect("failed to emit to main")
            }

            if let EventType::KeyPress(key) = event.event_type {
                let key_name = get_key::get_key(key);

                handle
                    .emit_to("main", "KeyPress", key_name)
                    .expect("failed to emit to main")
            }
        };

        if let Err(error) = listen(callback) {
            println!("Error: {:?}", error)
        }
    });
}
