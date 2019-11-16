<template>
    <div class="page">
        <Header></Header>
        <div class="content">
            <LinkApp></LinkApp>
            <Fiction></Fiction>
            <Nonfiction></Nonfiction>
            <BookStore></BookStore>
            <FindBook></FindBook>
            <Category></Category>
            <DownApp></DownApp>
        </div>
    </div>
</template>

<script>
import Fiction from "@components/index/fiction"
import Nonfiction from "@components/index/nonfiction"
import BookStore from "@components/index/bookstore"
import FindBook from "@components/index/findBook"
import Category from "@components/index/category"
import DownApp from "@components/index/downApp"
export default{
    name:"Index",
    components:{
        Fiction,
        Nonfiction,
        BookStore,
        FindBook,
        Category,
        DownApp
    }
}
</script>

<style>
body{
    background:#fff;
}
</style>