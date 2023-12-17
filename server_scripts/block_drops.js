// priority: 20
// the block drop loot table is broken, so it won't drop resin
// this fixes that

BlockEvents.broken("better_rubber:full_rubber_log", event => {
    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")

    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")
})