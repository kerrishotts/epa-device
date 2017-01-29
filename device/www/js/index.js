class App {
    constructor() {
        document.addEventListener("deviceready", () => {
            this.start();
        }, false);
    }

    displayDeviceInformation() {
        ["cordova", "model", "platform", "uuid", 
         "version", "manufacturer", "isVirtual", "serial"]
        .forEach(i => document.getElementById(i).textContent = 
                          (device[i] !== undefined && device[i] !== null)
                          ? device[i].toString() 
                          : "(blank)");
    }

    updateVisualTheme() {
        document.body.classList.add(device.platform.toLowerCase());
    }

    start() {
        // deviceready has been fired; it's safe to use plugins
        this.displayDeviceInformation();
        this.updateVisualTheme();
    }
}

window.app = new App();