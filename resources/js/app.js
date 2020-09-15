import Vue from "vue";
import router from "./router.js";
import HeaderComponent from "./components/HeaderComponent";

require("./bootstrap");
// window.Vue = require("vue"); いらない？

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component("header-component", HeaderComponent);

new Vue({
    el: "#app",
    router
});
