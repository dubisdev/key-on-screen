import { check } from "@tauri-apps/plugin-updater"
import { relaunch } from "@tauri-apps/plugin-process";
import { ask } from "@tauri-apps/plugin-dialog"

export const checkForUpdates = async () => {
    const update = await check();

    if (!update?.available) return;

    const response = await ask("Would you like to install it now?", {
        title: "New KoS version available (v" + update.version + ")",
        kind: "info"
    })

    if (!response) return;

    await update.downloadAndInstall()
    await relaunch();
}
