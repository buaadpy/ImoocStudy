<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
    data : function(){
        return {
            title: 'MyTodo',
        }
    }
}
</script>

<style scoped>
h1 {
    width:100%;
    height:180px;

    line-height:180px;
    text-align:center;
    font-size:50px;
    color:#dddddd;
} 
</style>