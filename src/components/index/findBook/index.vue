<template>
    <div class="find">
        <div class="title">
            <h4>发现好图书</h4>
        </div>
        <div class="find-list">
            <ul>
                <li style="border-color: #3BA94D;">
                    <a href="https://m.douban.com/doulist/10372/" style="color: #3BA94D;">小波看书</a>
                </li>
                <li style="border-color:#FFC46C;">
                    <a href="https://m.douban.com/doulist/105583/" style="color: #FFC46C;">村上春树周边</a>
                </li>
                <li style="border-color: #2384E8;;">
                    <a href="https://m.douban.com/doulist/99294/" style="color: #2384E8;">我凭名字认定了你</a>
                </li>
                <li style="border-color: #4F9DED;">
                    <a href="https://m.douban.com/doulist/35573/" style="color: #4F9DED;">不可饶恕的女人们</a>
                </li>
                <li class="line"></li>
                <li style="border-color: #42BD56;">
                    <a href="https://m.douban.com/doulist/38088147/" style="color: #42BD56;">爱欲书</a>
                </li>
                <li style="border-color: #CC3344;">
                    <a href="https://m.douban.com/doulist/645579/" style="color: #CC3344;">他们还写侦探小说</a>
                </li>
                <li style="border-color: #FFAC2D;">
                    <a href="https://m.douban.com/doulist/192653/" style="color: #FFAC2D;">人生识字始忧患</a>
                </li>
                <li style="border-color: #FF4055;">
                    <a href="https://m.douban.com/doulist/89925/" style="color: #FF4055;">詩歌書店</a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    export default {
        name: "FindBook",
    }
</script>
<style lang="scss">
    .find {
        overflow: hidden;
        .title{
            padding-left:0.125rem;
        }
        .find-list {

            padding-left:0.0583rem;
            ul {
                /* // width:3.1667rem; */
                white-space: nowrap;
                /* // height:1.4917rem; */
                overflow-x: auto;
                padding: 15px 15px 43px 0;
                font-size: 0;
                /* // box-sizing: border-box; */
                margin-left: -5px;

                li {
                    margin: 0 0 8px 8px;
                    font-size: 0.1167rem;
                    display: inline-block;
                    border-radius: 5px;
                    border: solid 1px;
                    vertical-align: middle;

                    a {
                        height: 50px;
                        line-height: 50px;
                        padding: 0 0.2083rem;
                        letter-spacing: .1em;
                        overflow: auto;
                        display: block;
                        text-align: center;
                    }
                }

                .line {
                    width: 100%;
                    display: block;
                    height: 1px;
                    border: 0;
                    margin: 0;
                }
            }
        }
    }
</style>