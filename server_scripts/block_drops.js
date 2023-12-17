BlockEvents.broken("better_rubber:full_rubber_log", event => {
    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")

    if (Math.random() < 0.5)
        event.block.popItem("better_rubber:resin")
})