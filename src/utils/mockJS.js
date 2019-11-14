const Mock = require("mockjs")

const url=require("url")

let cityList=[
    {
        id:1,
        title:"北京", //省
        city:[
            {
                title:"北京",//
                qu:[

                ]
            }
        ]
    }
]
const data = Mock.mock({
    "data|":[
        {
            "id|+1":1,
            "province":Random.province()
            "city":[
                
            ]
        }
    ]
})