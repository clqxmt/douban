<template>
    <div class="page">
        <Header></Header>
        <div class="content">
            <LinkApp></LinkApp>
            <BookDetail></BookDetail>
        </div>
    </div>
</template>
<script>
import BookDetail from "@components/detail/bookDetail"
export default{
    name:"Detail",
    components:{
        BookDetail,
    }

}
</script>