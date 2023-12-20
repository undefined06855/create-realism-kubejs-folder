// priority: 10

Ponder.registry(event => {
    event
    .create("better_rubber:resin")
    .scene("resin_ponder", "Getting resin from rubber trees", "kubejs:rubber_tree", (scene, util) => {
        scene.showStructure()
        scene.idle(10)

        scene
            .text(70, "This is a rubber tree, find it in swamps and mangrove swamps.", [1, 7, 1])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()

        scene.idle(80)

        scene
            .text(300, "Chop the logs down to get 0 - 2 pieces of resin (50%% chance each).", [1, 7, 1])
            .colored(PonderPalette.WHITE)
            .placeNearTarget()

        scene
            .showControls(300, [1, 5.5, 1], "left")
            .withItem("iron_axe")

        scene.idle(20)        
    })

    // easter eggg (dirt ponder)
    event
    .create("minecraft:dirt")
    .scene("easter_egg", "Something...", "kubejs:blank_baseplate", (scene, util) => {
        scene.showStructure()
        scene.idle(20)
        const blobbyFish = scene.world.createEntity("alexsmobs:blobfish", [11 / 2, 1, 11 / 2]);
    })
})

console.info("Ponder stuff added [CLIENT]")
