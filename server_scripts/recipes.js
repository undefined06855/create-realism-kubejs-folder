// priority: 10
// To be honest I have no idea what priority is but oh well

function generateCreateEncasedBlock(event, item, type)
{
    event.recipes.minecraft.crafting_shaped(`create:${type}_encased_${item}`,
        ["A", "B", "A"],
        {
            "A": `create:${item}`,
            "B": `create:${type}_casing`
        }
    )
}

function generateCircled(event, result, outsideItem, insideItem)
{
    event.recipes.minecraft.crafting_shaped(result,
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": outsideItem,
            "B": insideItem
        }
    )
}


ServerEvents.recipes(event => {
    // create:shaft
    event.remove({ output: "create:shaft"} )
    event.recipes.minecraft.stonecutting("create:shaft", "create:andesite_alloy")

    // create:andesite_alloy
    event.remove({ output: "create:andesite_alloy" })
    event.recipes.create.mixing("2x create:andesite_alloy", [ // efficient for mid-game
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).heated()
    event.recipes.create.mixing("5x create:andesite_alloy", [ // very efficient for end-game
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).superheated()
    // normal crafting for early-game (no auto-crafting, since id ends in "_manual_only")
    event.recipes.minecraft.crafting_shapeless("create:andesite_alloy", ["2x #forge:nuggets/iron", "2x minecraft:andesite"]).id("kubejs:andesite_alloy_manual_only")
    
    // create:brass_ingot
    event.remove({ output: "create:brass_ingot" })
    event.recipes.create.mixing(Item.of("2x create:brass_ingot").withChance(0.9).withRolls(2), [
        "2x minecraft:copper_ingot",
        "create:zinc_ingot"
    ]).heated()

    // create:belt_connector
    event.remove({ output: "create:belt_connector" })
    event.recipes.create.pressing(Item.of("create:belt_connector").withChance(0.8).withRolls(5), "better_rubber:rubber_bar")

    // create:mechanical_press
    event.remove({ output: "create:mechanical_press" })
    event.recipes.minecraft.crafting_shaped("create:mechanical_press",
        ["A", "B", "C"],
        {
            "A": "create:andesite_encased_shaft",
            "B": "create:piston_extension_pole",
            "C": "#create:sleepers"
        }
    )

    // create:mechanical_mixer
    event.remove({ output: "create:mechanical_mixer" })
    event.recipes.minecraft.crafting_shaped("create:mechanical_mixer",
        ["A", "B", "C"],
        {
            "A": "create:andesite_encased_cogwheel",
            "B": "create:piston_extension_pole",
            "C": "create:whisk"
        }
    )
    
    // create:mechanical_piston
    event.remove({ output: "create:mechanical_piston" })
    event.recipes.minecraft.crafting_shaped("create:mechanical_piston",
        ["A", "B", "C"],
        {
            "A": "minecraft:piston",
            "B": "create:piston_extension_pole",
            "C": "create:andesite_encased_shaft"
        }
    )

    // encased stuff:
    generateCreateEncasedBlock(event, "shaft", "andesite")
    generateCreateEncasedBlock(event, "cogwheel", "andesite")
    generateCreateEncasedBlock(event, "large_cogwheel", "andesite")

    generateCreateEncasedBlock(event, "shaft", "brass")
    generateCreateEncasedBlock(event, "cogwheel", "brass")
    generateCreateEncasedBlock(event, "large_cogwheel", "brass")

    // create:water_wheel and create:large_water_wheel
    event.remove({ output: "create:water_wheel" })
    event.remove({ output: "create:large_water_wheel" })
    generateCircled(event, "create:water_wheel", "#minecraft:wooden_slabs", "create:andesite_encased_cogwheel")
    generateCircled(event, "create:large_water_wheel", "#minecraft:wooden_slabs", "create:andesite_encased_large_cogwheel")

    // rechiseledcreate:mechanical_chisel
    event.remove({ output: "rechiseledcreate:mechanical_chisel" })
    event.recipes.minecraft.crafting_shaped("rechiseledcreate:mechanical_chisel",
        ["A", "B"],
        {
            "A": "rechiseled:chisel",
            "B": "create:andesite_encased_shaft"
        }
    )

    // create:mechanical_drill
    event.replaceInput({ output: "create:mechanical_drill" }, "create:andesite_casing", "create:andesite_encased_shaft")

    // create:mechanical_saw
    event.replaceInput({ output: "create:mechanical_saw" }, "create:andesite_casing", "create:andesite_encased_shaft")

    // create:mechanical_crafter
    event.replaceInput({ output: "create:mechanical_crafter" }, "create:brass_casing", "create:brass_encased_cogwheel")

    // create:mechanical_arm
    event.replaceInput({ output: "create:mechanical_arm" }, "create:brass_casing", "create:brass_encased_cogwheel")

    
    // create:cogwheel and create:large_cogwheel
    event.remove({ output: "create:cogwheel" })
    event.remove({ output: "create:large_cogwheel" })
    generateCircled(event, "create:cogwheel", "#minecraft:wooden_buttons", "create:shaft")
    // ffs I would've loved to use autocrafters to make a larger cogwheel but would've been too annoying in early-game
    generateCircled(event, "create:large_cogwheel", "#minecraft:wooden_buttons", "create:cogwheel")

    // create:crushing_wheel
    event.remove({ output: "create:crushing_wheel" })
    event.recipes.create.mechanical_crafting(
        "create:crushing_wheel",
        [
            " AAA ",
            "AABAA",
            "ABCBA",
            "AABAA",
            " AAA "
        ],
        {
            "A": "create:andesite_alloy",
            "B": "#balm:wooden_rods", // adds a few more stick types than #forge:rods/wooden (also it includes #forge:rods/wooden as a child)
            "C": "create:andesite_encased_shaft"
        }
    )

    // create:andesite_tunnel, create:brass_tunnel, create:andesite_funnel and create:brass_funnel
    event.remove({ output: "create:andesite_tunnel" })
    event.remove({ output: "create:andesite_funnel" })
    event.remove({ output: "create:brass_tunnel" })
    event.remove({ output: "create:brass_funnel" })

    generateCircled(event, "4x create:andesite_tunnel", "create:andesite_alloy", "minecraft:dried_kelp")

    event.recipes.minecraft.crafting_shaped(
        "4x create:andesite_funnel",
        [
            "AAA",
            "ABA",
        ],
        {
            "A": "create:andesite_alloy",
            "B": "minecraft:dried_kelp"
        }
    )

    event.recipes.minecraft.crafting_shaped(
        "4x create:brass_funnel",
        [
            "ACA",
            "ABA",
        ],
        {
            "A": "create:brass_ingot",
            "B": "minecraft:dried_kelp",
            "C": "create:electron_tube"
        }
    )

    event.recipes.minecraft.crafting_shaped(
        "4x create:brass_tunnel",
        [
            "ACA",
            "ABA",
            "AAA"
        ],
        {
            "A": "create:brass_ingot",
            "B": "minecraft:dried_kelp",
            "C": "create:electron_tube"
        }
    )
    
    
    
    // =========== STUFF YOU CAN'T AUTOMATE (or is hard to) ===========

    // minecraft:deepslate and minecraft:cobbled_deepslate
    event.recipes.create.compacting(Item.of("minecraft:deepslate").withChance(0.7), "minecraft:stone")
    event.recipes.create.compacting(Item.of("minecraft:cobbled_deepslate").withChance(0.7), "minecraft:cobblestone")

    // minecraft:skeleton_skull
    event.recipes.create.compacting("minecraft:skeleton_skull", "6x minecraft:bone_block")

    // minecraft:wither_skeleton_skull
    event.recipes.create.sequenced_assembly([
        Item.of("minecraft:wither_skeleton_skull").withChance(0.9),
    ], "minecraft:skeleton_skull", [
        event.recipes.create.filling("kubejs:incomplete_wither_skeleton_skull", ["kubejs:incomplete_wither_skeleton_skull", Fluid.of("create_enchantment_industry:ink").withAmount(120)]) // 120mb
    ]).transitionalItem("kubejs:incomplete_wither_skeleton_skull").loops(6) // set the transitional item and the loops (amount of repetitions)

    // minecraft:ender_pearl
    event.recipes.create.mixing(Item.of("minecraft:ender_pearl").withChance(0.5).withRolls(2), ["minecraft:slime_ball", "minecraft_black_dye"])

    // minecraft:netherrack
    event.recipes.create.haunting(Item.of("minecraft:netherrack").withChance(0.2).withRolls(3), "minecraft:stone")

    // minecraft:gunpowder
    event.recipes.create.crushing(Item.of("minecraft:gunpowder").withChance(0.1).withRolls(3), "create:cinder_flour")


    // minecraft:iron_nugget (increased chance)
    event.remove({ id: "create:splashing/gravel" })
    event.recipes.create.splashing(
        [
            Item.of("minecraft:iron_nugget").withChance(0.2).withRolls(2),
            Item.of("minecraft:flint").withChance(0.8),
        ],
        "minecraft:gravel"
    )

    // create_crush_everything:diamond_shard
    // basically just minecraft:diamond, very low chance though to avoid it being too op
    event.recipes.create.compacting(Item.of("create_crush_everything:diamond_shard").withChance(0.05), "minecraft:coal_block").superheated()

    // replace all coal with coal or charcoal
    // except for when milling / crushing coal / charcoal to make black dye
    event.replaceInput({not: { output: "minecraft:black_dye" }}, "minecraft:coal", "#minecraft:coals")

    
    // create_crush_everything:netherite_shard
    // basically just minecraft:netherite_ingot, low chance though
    event.recipes.create.mixing(
        [
            Item.of("minecraft:netherite_upgrade_smithing_template").withChance(0.97),
            Item.of("create_crush_everything:netherite_shard").withChance(0.1)
        ],
        [
            "minecraft:netherite_upgrade_smithing_template",
            "minecraft:diamond"
        ]
    )

    // EVERY ORE TYPE:
    // This is a very easy mid-game way to get a bunch of different stuff, but very rarely
    event.recipes.create.splashing([
        // common (1%)
        Item.of("minecraft:iron_nugget").withChance(0.01),
        Item.of("create:zinc_nugget").withChance(0.01),
        Item.of("create:copper_nugget").withChance(0.01),

        // rare (0.5%)
        Item.of("minecraft:gold_nugget").withChance(0.005),
        Item.of("create:brass_nugget").withChance(0.005),
        
        // very rare (0.1% and 0.05%)
        Item.of("create_crush_everything:diamond_shard").withChance(0.001),
        Item.of("create_crush_everything:netherite_shard").withChance(0.0005)
    ], "#forge:gravel")
})
