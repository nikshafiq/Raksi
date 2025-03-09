import BottomFooter from "./BottomFooter.vue";
import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("bottom-footer", BottomFooter);
    app.component("top-navigation", TopNavigation);
}

export default {
    registerComponents
};