<template>
    <div class="container">
            <v-touch 
            tag="i"
            @tap="showAddress()"
            class="cancel" >x</v-touch>
            <h3>新建地址</h3>
            <div class="address">
                <div class="name input-text">
                    <input type="text" placeholder="收货人姓名" 
                        :value="name"
                        @input="inputChange({type:'name',e:$event})"
                    >
                </div>
                <div class="phone input-text">
                    <input type="text" placeholder="收货人电话号码"
                        :value="phone"
                        @input="inputChange({type:'phone',e:$event})"
                    >
                </div>
                <div class="selectAddress">
                    <div class="selectProvince select">
                        <select @change="selectChange({type:'province',e:$event})" 
                        name="province"
                        :value="stateProvince"
                         
                        >
                            <option>选择省</option>
                            <option
                            v-for="(item,index) in provinceList" 
                            :value="item.title+''+index"
                            :key="index">{{item.title}}</option>
                        </select>
                        <i></i>
                    </div>
                    <div class="selectCity select">
                        <select :value="stateCity" 
                        name="city"
                        @change="selectChange({type:'city',e:$event})"
                       
                        >
                            <option value="选择市" selected>选择市</option>
                            <option
                            v-for="(item,index) in provinceList[provinceIndex].city" 
                            index=index
                            :key="index">{{item.cityTitle}}</option>
                        </select>
                    </div>
                    <div class="selectArea select">
                        <select :value="stateCounty" 
                        name="county"
                        @change="selectChange({type:'county',e:$event})">
                            <option value="选择地区" selected>选择地区</option>
                            <option 
                            v-for="(item,index) in provinceList[provinceIndex].city[cityIndex].county" :key="index"
                            >{{item}}</option>
                        </select>
                    </div>
                </div>
                <div class="detailAddress">
                    <textarea 
                    :value="detailAddress" @input="inputChange({type:'detailAddress',e:$event})"
                    name="detail" placeholder="请输入详细地址，例街道号码，楼门号"></textarea>
                </div>
                <v-touch tag="button" class="save" @tap="saveAddress()">保存</v-touch>
            </div>
    </div>
</template>
<script>
    import {cityApi} from "@api/city"
    import {mapState,mapMutations} from "vuex"
export default{
    name:"address",
    data(){
        return{
            provinceList:[
                
                {
                    title:"北京市",
                    city:[
                        {
                            cityTitle:"北京市",
                            county:["昌平区","朝阳区","海淀区"]
                        }
                    ]
                },
                {
                    title:"河南省",
                    city:[
                        {
                            cityTitle:"郑州市",
                            county:["二七区","新郑市"]
                        },
                        {
                            cityTitle:"安阳市",
                            county:["文峰区","北城区"]
                        }
                    ]
                }
            ],
           
        }

    },
    computed:{
        ...mapState({
            name:state=>state.editAddress.name,
            phone:state=>state.editAddress.phone,
            stateProvince:state=>state.editAddress.provinec,
            stateCity:state=>state.editAddress.city,
            stateCounty:state=>state.editAddress.county,
            detailAddress:state=>state.editAddress.detailAddress,
            show:state=>state.editAddress.show,
            provinceIndex:state=>state.editAddress.provinceIndex,
            cityIndex:state=>state.editAddress.cityIndex
        })
    },
    methods:{
        ...mapMutations({
            selectChange:"editAddress/selectChange",
            saveAddress:"editAddress/saveAddress",
            inputChange:"editAddress/inputChange",
            showAddress:"editAddress/showAddress"
        })
    },

}
</script>
<style lang="scss">
.container{
    background-color: #fff;
    box-shadow: 0 0 6px #6e6e6e;
    box-sizing: border-box;
    position: fixed;
    overflow: scroll;
    width:100%;
    height:100%;
    z-index:1000;
    .cancel{
        font-size: 24px;
        right: 20px;
        top: 6px;
        position: absolute;
        z-index: 1;
        color: #3e3a39;
        font-weight: 300;
        background-color: transparent;
    }
    h3{
        padding:15px 20px 18px 25px;
        font-size: 15px;
        color: rgba(0,0,0,.9);
    }
    .address{
        padding-right: 20px;
        padding-left: 25px;
        .input-text{
            border-width: 1px;
            margin-bottom: 15px;
            border-style: solid;
            position: relative;
            
            input{
                padding-right: 10px;
                padding-left: 10px;
                font-size: 14px;
                line-height: 36px;
                height: 36px;
                width: 100%;
                resize: none;
                background-color: #f9f9f9;
                border: none;
                box-sizing: border-box;
                color: rgba(0,0,0,0.9);
                vertical-align: middle;
                outline: none;
                font: inherit;
            }
        }
       
        .selectAddress{
            border: 0;
            margin-bottom: 15px;
            display: flex;
            position: relative;
            .select{
                border-width: 1px;
                margin-right: 15px;
                flex: 1;
                width: 33%;
                border-style: solid;
                position: relative;
                select{
                    font-size: 12px;
                    color: #3e3a39;
                    flex: 1;
                    padding:0 10px;
                    line-height: 36px;
                    height: 36px;
                    width: 100%;
                    box-sizing: border-box;
                    border-radius: 0;
                    background-color: #f9f9f9;
                    border: none;
                    vertical-align: middle;
                    outline: none;
                    appearance:none;
                    -moz-appearance:none;  
                    -webkit-appearance:none;
                    
                }
            }
            //选择省
            .selectProvince{
                select{
                    color: rgba(0,0,0,.9);
                }
                i{
                    top: 15.5px;
                    right: 10px;
                    position: absolute;
                    border-top: 4px solid #9b9b9b;
                    border-left: 1px solid transparent;
                    border-right: 1px solid transparent;
                    border-width: 9px;
                
                }
            }
        }
        .detailAddress{
            border-width: 1px;
            margin-bottom: 15px;
            border-style: solid;
            position: relative;
            textarea{
                font-size: 14px;
                padding-right: 10px;
                padding-left: 10px;
                line-height: 36px;
                height: 36px;
                width: 100%;
                resize: none;
                background-color: #f9f9f9;
                border: none;
                box-sizing: border-box;
                color: rgba(0,0,0,.9);
                vertical-align: middle;
                outline: none;
                overflow: auto;
            }
        }
        button{
            margin-top: 15px;
            margin-bottom: 10px;
            line-height: 40px;
            height: 40px;
            font-size: 14px;
            color: #fff;
            text-align: center;
            background-color: #44883e;
            width:100%;
            border:none;
        }
    }
}
</style>