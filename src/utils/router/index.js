import {createWebHistory, createRouter} from "vue-router";

//Импортируем компоненты, которые будут отображаться на разных страницах
import HelloWorld from "../../components/HelloWorld.vue";
import NewsList from "../../components/NewsList.vue";
import NewsItem from "../../components/NewsItem.vue";

//Делаю конфигурацию, который показывает опр. компонент при переходе по опр. пути
//При переходе на / отображаем компонент HelloWorld
const routes = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld
    },
    {
        path: "/news",
        name: "News",
        component: NewsList
    },
    {
        //Параметры, указанные с : впереди, явл. динамическими
        path: "/news/:id",
        name: "NewsItem",
        component: NewsItem
    }
]

//
const router = createRouter({
    //Пока пропускаем разбор history
    history: createWebHistory(),
    //Передаём в поле при создании объекта роутер наш routes
    routes: routes,
})

//export default - это экспорт объекта по умолчанию, подходит для одного элемента
export default router