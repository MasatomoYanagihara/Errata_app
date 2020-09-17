import Vue from "vue";
import VueRouter from "vue-router";

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
        //     component: () =>
        //         import(
        //             /* webpackChunkName: "*" */ "./components/NotFoundComponent"
        //         )
        // },
        {
            path: "/tasks",
            name: "task.list",
            component: () =>
                import(
                    /* webpackChunkName: "task.list" */ "./components/TaskListComponent"
                )
        },
        {
            path: "/tasks/create",
            name: "task.create",
            component: () =>
                import(
                    /* webpackChunkName: "task.create" */ "components/TaskCreateComponent"
                )
        },
        {
            path: "/tasks/:taskId",
            name: "task.show",
            component: () =>
                import(
                    /* webpackChunkName: "task.show" */ "./components/TaskShowComponent"
                ),
            props: true
        },
        {
            path: "/tasks/:taskId/edit",
            name: "task.edit",
            component: () =>
                import(
                    /* webpackChunkName: "task.edit" */ "./components/TaskEditComponent"
                ),
            props: true
        },
        {
            path: "/tasks/serch",
            name: "task.serch",
            component: () =>
                import(
                    /* webpackChunkName: "task.serch" */ "./components/TaskSerchComponent"
                )
        }
    ]
});
