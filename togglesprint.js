ModAPI.require("player");
let sprintToggled = false;
function updateSprintState() {
    if (sprintToggled) {
        ModAPI.player.serverSprintState = true;
    } else {
        ModAPI.player.serverSprintState = false;
    }
}
function toggleSprintOn() {
    sprintToggled = true;
    updateSprintState();
    ModAPI.displayToChat({ msg: "ToggleSprint activated." });
}
function toggleSprintOff() {
    sprintToggled = false;
    updateSprintState();
    ModAPI.displayToChat({ msg: "ToggleSprint deactivated." });
}
ModAPI.addEventListener("sendchatmessage", (ev) => {
    const message = ev.message.toLowerCase().trim();
    if (message === ".togglesprint on") {
        ev.preventDefault = true;
        toggleSprintOn();
    } else if (message === ".togglesprint off") {
        ev.preventDefault = true;
        toggleSprintOff();
    } else if (message === ".togglesprint") {
        ev.preventDefault = true;
        ModAPI.displayToChat({ msg: "Incorrect Usage: Use .togglesprint on or .togglesprint off" });
    }
});
ModAPI.addEventListener("update", () => {
    updateSprintState();
});
