// priority: 20
// the block drop loot table for rubber logs is broken, so it won't drop resin
// this just fixes that

BlockEvents.broken("better_rubber:full_rubber_log", event => {
    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")

    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")
})
