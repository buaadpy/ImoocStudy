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
    height:200px;

    line-height:200px;
    text-align:center;
    font-size:50px;
    color:#555555;
} 
</style>