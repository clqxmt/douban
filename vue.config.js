const path= require("path")

module.exports={
    devServer:{
        proxy:{
            "/rexxar":{
                target:"https://m.douban.com",
                changeOrigin:true
            },
            "/api":{
                target:"https://market.douban.com",
                changeOrigin:true
            },
            "/user":{
                target:"http://localhost:3000",
                changeOrigin:true
            },
            "/data":{
                target:"http://zhouxunwang.cn",
                changeOrigin:true
            },
            // "/search":{
            //     target:"https://m.douban.com",
            //     changeOrigin:true
            // }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@components":path.join(__dirname,"./src/components"),
                "@common":path.join(__dirname,"./src/common"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@api":path.join(__dirname,"./src/api"),
                "@public":path.join(__dirname,"./public"),
                "@lib":path.join(__dirname,"./src/lib")
            }
        }
    },
    
}