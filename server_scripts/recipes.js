// priority: 10
// To be honest I have no idea what priority is but oh well

ServerEvents.recipes(event => {
    // create:shaft:
    event.remove({ output: "create:shaft"} )
    event.recipes.minecraft.stonecutting("2x create:shaft", "create:andesite_alloy")

    // create:andesite_alloy
    event.remove({ output: "create:andesite_alloy" })
    event.recipes.create.mixing("create:andesite_alloy", [
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).heated()
    event.recipes.create.mixing("4x create:andesite_alloy", [
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).superheated()

    // create:belt_connector
    event.remove({ output: "create:belt_connector" })
    //event.recipes.minecraft.blasting("create:belt_connector", "myrtrees:latex", 0, 400)
})

BlockEvents.broken("better_rubber:full_rubber_log", event => {
    if (Math.random() < 0.7)
        event.block.popItem("better_rubber:resin")
})
