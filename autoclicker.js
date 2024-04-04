let cps = 1; //change cps here
let keybind = 12; //default keybind: minus
var toggled = false; //dont change

function click() {
  ModAPI.clickMouse();
}
let intervalTime = 1000 / cps;

    ModAPI.addEventListener("key", function(ev){
        if(ev.key == keybind){
            if(!toggled){
                ModAPI.displayToChat({msg: `autoclicker enabled at ${cps} cps`})
                toggled = true
                var clickInterval = setInterval(click, intervalTime);
            } else{
                ModAPI.displayToChat({msg: "autoclicker disabled"})
                toggled = false
                clearInterval(clickInterval);
            }
        }
    })