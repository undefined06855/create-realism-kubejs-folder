// priority: 10
// To be honest I have no idea what priority is but oh well

function generate_encased(event, item, type)
{
    event.recipes.minecraft.crafting_shaped(`create:${type}_encased_${item}`,
        ["A", "B", "A"],
        {
            "A": `create:${item}`,
            "B": `create:${type}_casing`
        }
    )
}

ServerEvents.recipes(event => {

    // create:shaft
    event.remove({ output: "create:shaft"} )
    event.recipes.minecraft.stonecutting("2x create:shaft", "create:andesite_alloy")

    // create:andesite_alloy
    event.remove({ output: "create:andesite_alloy" })
    event.recipes.create.mixing("2x create:andesite_alloy", [
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).heated()
    event.recipes.create.mixing("4x create:andesite_alloy", [
        "2x minecraft:andesite",
        "2x #forge:nuggets/iron"
    ]).superheated()
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

    // encased stuff:
    generate_encased(event, "shaft", "andesite")
    generate_encased(event, "cogwheel", "andesite")
    generate_encased(event, "large_cogwheel", "andesite")

    generate_encased(event, "shaft", "brass")
    generate_encased(event, "cogwheel", "brass")
    generate_encased(event, "large_cogwheel", "brass")

    // create:water_wheel and create:large_water_wheel

    event.remove({ output: "create:water_wheel" })
    event.remove({ output: "create:large_water_wheel" })

    event.recipes.minecraft.crafting_shaped("create:water_wheel",
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "#minecraft:wooden_slabs",
            "B": "create:andesite_encased_cogwheel"
        }
    )

    event.recipes.minecraft.crafting_shaped("create:large_water_wheel",
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "#minecraft:wooden_slabs",
            "B": "create:andesite_encased_large_cogwheel"
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
    })
