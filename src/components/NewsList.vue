<script>
export default {
    beforeMount: (el) => {
        //Сделать запрос к API для вывода новостей
        //'https://fakestoreapi.com'
        console.log("beforeMount")
    },
    data() {
        return {
            title: "Список новостей"
        }
    },
    setup(){
        return {
        }
    }
}

</script>

<template>
    <h1>{{title}}</h1>
</template>

<style scoped>

</style>