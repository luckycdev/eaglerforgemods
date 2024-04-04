ModAPI.require("network");

ModAPI.addEventListener("update", ()=>{
    ModAPI.network.sendPacketEntityAction({entityId: 0, action: START_SPRINTING, auxData: Integer});
}
