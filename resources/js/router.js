import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundComponent from "./components/NotFoundComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import TaskSerchComponent from "./components/TaskSerchComponent";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        // {
        //     // VueRouterに設定されていないURLはNotFoundを表示する
        //     path: "*",
        //     component: NotFoundComponent
        // },
        {
            path: "/tasks",
            name: "task.list",
            component: TaskListComponent
        },
        {
            path: "/tasks/create",
            name: "task.create",
            component: TaskCreateComponent
        },
        {
            path: "/tasks/:taskId",
            name: "task.show",
            component: TaskShowComponent,
            props: true
        },
        {
            path: "/tasks/:taskId/edit",
            name: "task.edit",
            component: TaskEditComponent,
            props: true
        },
        {
            path: "/tasks/serch",
            name: "task.serch",
            component: TaskSerchComponent
        }
    ]
});
