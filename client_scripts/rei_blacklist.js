// priority: 25
// hide broken items and tab icons

/*
REIRuntime.hideItems([
    "citadel:fancy_item", // ?? idk
    "citadel:icon_item", // tab icon
    "alexsmobs:tab_item", // tab icon
    "lootr:lootr_inventory", // tab icon? (non-functioning chest)
    "biomesoplenty:bop_icon", // tab icon
    "create:schematic", // broken if you didn't make it using schematic table
    "citadel:effect_item", // dont know what this is
    "citadel:debug" // what is this lol
])
//*/

REIEvents.hide("items", event => {
    event.hide([
        "citadel:fancy_item", // ?? idk
        "citadel:icon_item", // tab icon
        "alexsmobs:tab_item", // tab icon
        "lootr:lootr_inventory", // tab icon? (non-functioning chest)
        "biomesoplenty:bop_icon", // tab icon
        "create:schematic", // broken if you didn't make it using schematic table
        "citadel:effect_item", // dont know what this is
        "citadel:debug" // what is this lol
    ])
})
