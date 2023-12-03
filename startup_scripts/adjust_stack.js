// priority: 15

ItemEvents.modification(event => {
    event.modify("create:andesite_alloy", item => {
        item.maxStackSize = 128
    })
})
