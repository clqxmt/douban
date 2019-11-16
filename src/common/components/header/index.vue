<template>
    <div class="header">
        
        <a class="logo"></a>
        <form :calss="isShow?'onSearch':''">
            <input

            @click="handleFocus()"
            @search="handleSearch($event)"
             type="search" placeholder="搜索" />
        </form>
       <div class="nav-btn">
            <v-touch 
            tag="a"
            @tap="handleLogout"
            class="logout" v-if="isLogin" >退出登录</v-touch>
            <a v-if="!isShow" class="app"></a>
            <a class="cancle" v-if="isShow" @click="handleCancle()">取消</a>
       </div>
    </div>
</template>
<script>
import MessageBox from "@lib/messageBox/index.js"
// import {searchApi} from "@api/search"
export default{
    name:"Header",
    data(){
        return{
            isShow:false,
            flag:true,
            isLogin:false,
           
        }
    },
    methods: {
        //点击搜索框
        handleFocus(){
            if(this.flag){
                this.isShow=!this.isShow;
                this.flag=false;
                this.isLogin=!this.isLogin;
            }
            
        },
        //取消搜索
        handleCancle(){
            this.flag=true;
            this.isShow=!this.isShow;
            this.isLogin=!this.isLogin;
        },
        //退出登录
        handleLogout(){
            this.isLogin=false;
            localStorage.removeItem("token");
            MessageBox({
                content:"已退出登录",
                confirm:function(){}
            })
        },
        //按下回车搜索
        // async handleSearch(e){
        //     let searchVal=e.target.value;
        //     console.log(111);
        //     let data=await searchApi(searchVal);
        //     console.log(data);
        // }
    },
    created(){
        let token=localStorage.getItem("token");
        if(token){
            this.isLogin=true;
        }
        
    }
}
</script>

<style lang="scss">
.header{
    height:0.4167rem;
    width:100%;
    display:flex;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    background:#fff;
    box-shadow:0 1px 4px rgba(0,0,0,0.05);
    z-index:100000;
    display:flex;
    justify-content: flex-start;
    /* padding: 0 15px; */
    padding-right:15px;
    box-sizing:border-box;
  
    .logo{
        display:block;
        height: 0.2167rem;
        width: 0.45rem;
        background:url(data:image/png;base64,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) no-repeat center;
        background-size: contain;
        margin:0 0.125rem;
    }
    form{
        width: 0.8333rem;
        height: 0.25rem;
        border-radius: 0.125rem;
        border: 1px solid #dfdfdf;
        color: rgba(0,0,0,0.25);
        background-color: #f7f7f7;
        font-size: 0.125rem;
        line-height: 0.175rem;
        padding-left:0.125rem;
        box-sizing:border-box;
        /* flex:1; */
        input{
            background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) 0 center no-repeat;
            background-size:0.1417rem;
            width:100%;
            height:0.2583rem;
            font-size:0.1167rem;
            border-radius:0.125rem;
            border:none;
            padding-left:0.1667rem;
            outline:none;
        }
    
    }
    .onSearch{
        width: 1.9167rem;
        flex: 1.9167rem 0 0;
        animation: open ease-in 0.3s;
    }
    .nav-btn{
        flex: 1;
        font-size: 15px;
        line-height: 21px;
        color: #3ba94d;
        text-align: right;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .logout{
            padding: 0 15px;
            border-right: 1px solid rgba(0,0,0,0.12);
            padding-left: 0;
        }
        .cancle{
            color: rgba(0,0,0,0.7);
            font-size:15px;
            flex: 1;
            line-height: 21px;
        
            text-align: right;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            
        }
        .app{
            margin-left:0.125rem;
            width: 0.1667rem;
            height: 0.1583rem;
            background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKKADAAQAAAABAAAAJgAAAADmHvr3AAAB3UlEQVRYCe1YvU7DMBC+SzqAYERiYSlMLBUzG/0RAsFKVSYmHoIH4CGQEBsIViQklJbyCKgLE2JhYWFrBUNizsgR1yp2naRRXamp1Jydu+8+f+ckygE4fmD1ubkHkbgAAWtOcUX4AA9PPSfJSaWkYCSc55xyvIxEssTHT7U75ONp2dXOkYhze7Hh6tl5gkMl5irWg+amQNgQSP8FHgRPP3hrN25fk9JoFURflIsmJwnJHDJXEjk5pyUoQnz/W5suckLzMofMpYPTllhJnii7DqyIea2CRSTLgqlVsNZurRJgRWC4kAYYhf9N/r1O/eZTxo3DGfUfzWVSMDU5Ca4WVGGJjDgJ/izUdJOkVI6jctW5zX24bfIxKcgxpmbPCeaVfq5gYQqq51MmfB7LbR2YycdU4p4pcEyyHrtuxFE5uD8LBdC+SdSbIBjyzjDIi2NSMAOdyYc4TxD5B8rk158f0XkF5wTzFnkGFJRNGlcP4ubJDhK4SFJ1t3J9lNs+ovL0fGZgD7q6/xSv1CVudI+3wig8o8B9AWLJZn0I2Kd+2oPv+efBzvWLTUzsY03wsNtaGUTRFZE6iIOznInsfWlx+eRx+/LLJt56Dw4wKlMbpWYDavYRu9FPf93s83/1F6K5muLha2yBAAAAAElFTkSuQmCC) no-repeat;
            background-size: contain;
        }
    }
    
}
</style>
