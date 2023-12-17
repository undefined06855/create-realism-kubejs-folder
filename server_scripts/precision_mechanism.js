// priority: 500
// precision mechanism is modified using custom json, too large to comfortably fit in `recipes.js`

ServerEvents.recipes(event => {
    event.remove({ "output": "create:precision_mechanism" })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "tag": "forge:plates/gold"
        },
        "transitionalItem": {
            "item": "create:incomplete_precision_mechanism"
        },
        "sequence": [{
                "type": "create:deploying",
                "ingredients": [{
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:cogwheel"
                    }
                ],
                "results": [{
                    "item": "create:incomplete_precision_mechanism"
                }]
            },
            {
                "type": "create:deploying",
                "ingredients": [{
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "item": "create:large_cogwheel"
                    }
                ],
                "results": [{
                    "item": "create:incomplete_precision_mechanism"
                }]
            },
            {
                "type": "create:deploying",
                "ingredients": [{
                        "item": "create:incomplete_precision_mechanism"
                    },
                    {
                        "tag": "forge:nuggets/iron"
                    }
                ],
                "results": [{
                    "item": "create:incomplete_precision_mechanism"
                }]
            }
        ],
        "results": [{
            "item": "create:precision_mechanism",
            "chance": 80
        }],
        "loops": 5
    })
})
