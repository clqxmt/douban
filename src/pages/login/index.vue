<template>
    <div>
        <Register v-if="!this.$store.state.is"></Register>
        <Sign v-if="this.$store.state.is"></Sign>
    </div>
</template>
<script>
    import Register from "@components/register"
    import Sign from "@components/sign"
export default{
    name:"login",
   
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