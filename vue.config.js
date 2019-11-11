const path= require("path")

module.exports={
    devServer:{
        proxy:{
            "/book"{
                target:"https://m.douban.com",
                changeOrigin:true
            }
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
            }
        }
    }
}