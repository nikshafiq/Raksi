import Navigation from "./Navigation.vue";

function registerComponents(app) {
    app.component("navigation", Navigation);
}

export default {
    registerComponents
};