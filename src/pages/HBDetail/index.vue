<template>
  <div class="page">
      <div class="top">
        <div class="Dheader">
            <img src="https://img3.doubanio.com/f/freyr/139cdacc32f9fa8cf65b14ee80f131b8ac0f7ba7/pics/icon/logo_white.png" alt="">
        </div>
        <div class="banner"></div>
        <div class="text">
            <p>立体书领域有一项荣誉大奖，叫“梅根多夫大奖”，堪比电影界的“奥斯卡”，美国纸艺大师马修·莱茵哈特就曾两度上榜。</p>
            <p>马修的作品有很多曾被国内出版社引进过，《世界经典立体书珍藏版：灰姑娘》《3D变形金刚》《星球大战：银河系立体书》《超级英雄立体书》等。他的作品把立体书推向一个崭新高度，令全世界的读者耳目一新，不光受到孩子们的疯狂喜爱，很多成年人也争相收藏。</p>
            <p>在马修的众多作品中，《哈利·波特立体书：霍格沃茨魔法学校》受到全球哈利·波特粉丝的瞩目，成为经典中的经典。他说，“到目前为止，这是我做过的最为复杂的立体书之一。”</p>
        </div>
    </div>
    <!-- main -->
    <div class="main">
        <div class="nav">
            <span>豆瓣短评</span>
        </div>
        <div class="comment">
            <span>共5条短评</span>
            <ul>
                <li v-for="(item,index) in commentList" :key="index">
                    <div class="user_logo">
                        <img :src="item.user_logo">
                        <div class="username">{{item.user_name}}</div>
                        <span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span><span class="star"></span>
                    </div>
                    <div class="user_comment">
                        <p>{{item.content}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- cart -->
    <div class="joincart">
        <div class="price">
            ￥69
        </div>
        <div class="add_cart">
            加入购物车
        </div>
    </div>
  </div>
</template>

<script>
import {HBApi} from "@api/books"
export default {
    name:"HBDetail",
    data(){
        return {
            commentList:[]
        };
    },
    async created(){
        let data = await HBApi();
        console.log(data);
        this.commentList = data.data;
    }
}
</script>

<style>
.Dheader{
    position: absolute;
    width: 100%;
    height: 74px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: .208rem;
    box-sizing: border-box;
}
.Dheader img{
    width: .717rem;
    height: .183rem;
}
.banner{
    width: 100%;
    height: 2.333rem;
    background: url(https://img1.doubanio.com/view/freyr_page_photo/raw/public/4848.jpg) no-repeat;
    background-size: cover;
    background-position: 50%;
}
.text{
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: #fbf8f5;
    padding: 30px 25px 15px;
    color: rgba(0,0,0,.9);
}
.text p{
    margin: 15px 0;
    font-size: 16px;
    line-height: 25px;
}

.main{
    width: 100%;
}
.main .nav{
    width: 100%;
    height: .467rem;
    display: flex;
    justify-content: center;
}
.main .nav span{
    color: rgba(0,0,0,.9);
    font-weight: 700;
    font-size: .125rem;
    line-height: .467rem;
    display: block;
    width: .517rem;
    height: .467rem;
    border-bottom: 2px solid #e76648;
}
.main .comment{
    width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    padding: 0 0 60px 25px;
}
.main .comment>span{
    display: inline-block;
    color: #9b9b9b;
    font-size: 16px;
    padding: 20px 0;
}
.comment ul li{
    margin-top: .167rem;
}
.comment ul li .user_logo{
    width: 100%;
    height: .167rem;
}
.comment ul li .user_logo img{
    width: .167rem;
    height: .167rem;
    border-radius: 50%;
    margin-right: .083rem;
}
.comment ul li .user_logo .username{
    font-size: .125rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
}
.comment ul li .user_comment{
    height: auto;
    padding-bottom: .208rem;
    width: 2.75rem;
    margin-left: .25rem;
    margin-top: .083rem;
    border-bottom: 1px solid #e8e8e8;
}
.comment ul li .user_comment p{
    line-height: .175rem;
    color: #494949;
    white-space: pre-wrap;
    padding-right: .125rem;
}
.star{
    width: .108rem;
    height: .108rem;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==) no-repeat center;
    background-size: contain;
    display: inline-block;
}

.joincart{
    width: 100%;
    height: .475rem;
    position: fixed;
    bottom: 0;
}
.joincart .price{
    width: 50%;
    height: 100%;
    background: #fff;
    line-height: .475rem;
    text-align: center;
    font-size: .167rem;
    color: #e76648;
    float: left;
}
.joincart .add_cart{
    width: 50%;
    height: 100%;
    background: #e76648;
    float: left;
    line-height: .475rem;
    text-align: center;
    font-size: .167rem;
    color: #fff;
}

</style>