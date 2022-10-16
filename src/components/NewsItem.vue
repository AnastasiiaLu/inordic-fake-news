<script>
import {useRouter, useRoute} from 'vue-router'
import axios from 'axios'
//Неправильная строчка для нашего приложения! require не применяем
//const axios = require('axios').default;

export default {
    /*
    * в переменной $route доступно поле params со всеми параметрами из строки
    */
    beforeMount: function(el) {
        const route = useRoute();
        const router = useRouter();
        console.log("beforeMount route", route)
        console.log("beforeMount router", router)
        console.log("id = ", router.currentRoute.value.params.id)
        //console.log("beforeMount id", $route.params.id)

        //Получаем параметр id из URL
        const ID = router.currentRoute.value.params.id
        console.log('axios', axios);
        axios.get("https://fakestoreapi.com/products/1").then((response) => {
            //Блок then срабатывает после отработки запроса к серверу
            //console.log(response);
            //console.log(this.hello);
            //Записываем данные, пришедшие от сервера в блок с данными (data)
            this.data = response.data
        })
    },
    mounted: () => {
        console.log("mounted")
        //console.log("mounted id", $route.params.id)
    },
    data() {
        return {
            hello: "Привет",
            data: null
        }
    },
    setup(){
        return {
        }
    }
}

</script>

<template>
    <h1>Новость {{$route.params.id}}</h1>
    <h2>{{data?.title}}</h2>
</template>

<style scoped>

</style>
