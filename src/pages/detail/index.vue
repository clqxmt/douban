<template>
    <div class="page">
        <Header></Header>
        <div class="content">
            <LinkApp></LinkApp>
            <BookDetail :list="bookDetailList"></BookDetail>
            <BookContent :introList="bookContent"></BookContent>
            <Comment></Comment>
        </div>
    </div>
</template>
<script>
import BookDetail from "@components/detail/bookDetail"
import BookContent from "@components/detail/bookContent"
import Comment from "@components/detail/comment"
import {detailApi,bookStore} from "@api/detail"
export default{
    name:"Detail",
    props:["id"],
    components:{
        BookDetail,
        BookContent,
        Comment
    },
    data(){
        return{
            bookDetailList:[],
            bookContent:[],
            
        }
    },
    methods:{
        async requestDate(){
            let data=await detailApi(this.$props.id);
            this.bookDetailList=data;
            this.bookContent=data.intro;
            localStorage.setItem("list",JSON.stringify(this.bookDetailList));
        }
    },
    created(){
        this.requestDate();
       
    },
     watch:{
        "$route"(){
            this.requestDate();
        }
    }

}
</script>