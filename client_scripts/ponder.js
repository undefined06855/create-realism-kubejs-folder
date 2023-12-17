// priority: 10

Ponder.registry(event => {
    event
    .create("better_rubber:resin")
    .scene("resin_ponder", "Getting resin from rubber trees", "kubejs:rubber_tree", (scene, util) => {
        scene.showStructure()
        scene.idle(10)

        scene
            .text(50, "This is a rubber tree, find it in swamps and mangrove swamps.", [2.0, 2.5, 2.5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()

        scene.idle(50)

        scene
            .text(300, "Chop the logs down to have a 70%% chance of getting resin.", [2.0, 2.5, 2.5])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()

        scene
            .showControls(300, [2.5, 3, 2.5], "left")
            .withItem("iron_axe")

        scene.idle(20)        
    })
})

console.info("Ponder stuff added")
