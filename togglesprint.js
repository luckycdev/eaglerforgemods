ModAPI.addEventListener("update", function (){
    if(sprintToggled){
            if(ModAPI.player.moveForward != 0 && !ModAPI.player.isSneaking() && !ModAPI.player.isBlocking()){ //TODO
                ModAPI.player.setSprinting({flag: true})
                ModAPI.player.reload()
            } else {
                ModAPI.player.setSprinting({flag: false})
                ModAPI.player.reload()
            }
    } else {
            ModAPI.player.setSprinting({flag: false})
            ModAPI.player.reload()
    }
    
})


ModAPI.require("player");
let sprintToggled = false;
function updateSprintState() {
    if (sprintToggled) {
        ModAPI.player.setSprinting({flag: true});
    } else {
        ModAPI.player.setSprinting({flag: false});
    }
    ModAPI.player.reload();
}

function toggleSprintOn() {
    sprintToggled = true;
    if(ModAPI.player.moveForward != 0 && !ModAPI.player.isSneaking() && !ModAPI.player.isBlocking()){
    updateSprintState();
    ModAPI.displayToChat({ msg: "ToggleSprint activated." });
}
}

function toggleSprintOff() {
    sprintToggled = false;
    updateSprintState();
    ModAPI.displayToChat({ msg: "ToggleSprint deactivated." });
}

ModAPI.addEventListener("key", function(ev){
    if(ev.key == 34){
        if(sprintToggled){
            sprintToggled = false
        } else {
            sprintToggled = true
        }
    }
})

/*ModAPI.addEventListener("update", () => {
    updateSprintState();
});*/