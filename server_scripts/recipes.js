// priority: 10
// To be honest I have no idea what priority is but oh well

ServerEvents.recipes(event => {
    // create:shaft:
    event.remove({ output: "create:shaft"} )
    event.recipes.minecraft.stonecutting("2x create:shaft", "create:andesite_alloy")

    // create:andesite_alloy
    event.remove({ output: "create:andesite_alloy" })
    event.recipes.create.mixing("create:andesite_alloy", [
        "minecraft:andesite",
        "#forge:nuggets/iron"
    ])
    event.recipes.create.mixing("create:andesite_alloy", [
        "minecraft:andesite",
        "#forge:ingots/iron"
    ]).heated()

    // [MOD] pocket_money
    event.remove({ mod: "pocket_money" })

    // exchanging currencies
    // money shouldn't be renewable - coppper isnt renewable unless you make tunnel bore
    event.recipes.create.pressing("pocket_money:copper_coin", [ "minecraft:copper_ingot" ])
    event.recipes.minecraft.smithing("pocket_money:silver_coin", "pocket_money:copper_coin", "create:iron_sheet")
    event.recipes.minecraft.smithing("pocket_money:gold_coin", "pocket_money:copper_coin", "create:golden_sheet")

    // create:belt_connector
    event.remove({ output: "create:belt_connector" })
})
