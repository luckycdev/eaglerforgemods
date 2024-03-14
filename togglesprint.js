ModAPI.require("player");
let sprintToggled = false;
function toggleSprint(enable) {
    sprintToggled = enable;
    ModAPI.player.serverSprintState = sprintToggled;
    ModAPI.player.reload();
    ModAPI.displayToChat({ msg: sprintToggled ? "Sprint Toggled ON" : "Sprint Toggled OFF" });
}
ModAPI.addEventListener("sendchatmessage", event => {
    const message = event.message.toLowerCase().trim();
    if (message === ".togglesprint on") {
        toggleSprint(true);
        event.preventDefault = true;
    } else if (message === ".togglesprint off") {
        toggleSprint(false);
        event.preventDefault = true;
    } else if (message === ".togglesprint") {
        ModAPI.displayToChat({ msg: "Usage: .togglesprint on or .togglesprint off" });
        event.preventDefault = true;
    }
});