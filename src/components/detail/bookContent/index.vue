<template>
    <div>
        <div class="book-content">
            <h4>简介</h4>
            <p>
                {{introList}}
                <a href="javascript:;" class="expand" style="float:right;">展开</a>
            </p>
        </div>
    
        <div class="split"></div>
    </div>
</template>
<script>
export default{
    name:"bookContent",
    props:["introList"],
    created(){
        // console.log(this.introList);
    }
}
</script>
<style lang="scss">
.book-content{
        padding: 0.15rem;
        font-size: 0.15rem;
        margin-bottom: 0.1rem;
        position: relative;
        p{
            color: #191919;
            font-size: 16px;
            line-height: 22px;
            word-wrap: break-word;
            margin: 0;
            padding: 0;
            overflow:hidden;
            height:88px;
            
            a{
                position:absolute;
                bottom:5px;
                right:0;
                color: #42bd56;
            }
        }
    }
</style>