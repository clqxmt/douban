<template>
    <div>
        <Register v-if="!is" @handle="change"></Register>
        <Sign v-if="is" @handle="change"></Sign>
    </div>
</template>
<script>
    import Register from "@components/register"
    import Sign from "@components/sign"
export default{
    name:"login",
    data(){
        return{
            is:true
        }
    },
    components:{
        Register,
        Sign
    },
    methods:{
        change(params){
            this.is=params;
            console.log(this.is);
        }
        
    },
    
}
</script>
<style lang="scss">

</style>