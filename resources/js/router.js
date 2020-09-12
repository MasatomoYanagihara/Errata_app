import Vue from "vue";
import Router from "vue-router";
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";

Vue.use(Router);

export default new Router({
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
        }
    ]
});
