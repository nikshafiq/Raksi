import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("top-navigation", TopNavigation);
}

export default {
    registerComponents
};