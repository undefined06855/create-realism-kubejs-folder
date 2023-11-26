// priority: 10
// To be honest I have no idea what priority is but oh well

ServerEvents.recipes(event => {
    // create:shaft:
    event.remove({ output: "create:shaft"} )
    event.stonecutting("2x create:shaft", "create:andesite_alloy")

    // create:andesite_alloy
    event.remove({ output: "create:andesite_alloy" })
    event.recipes.createMixing("create:andesite_alloy", [
        "create:creative_motor"
    ])
})
