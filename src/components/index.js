import BottomFooter from "./BottomFooter.vue";
import RaButton from "./RaButton.vue";
import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("bottom-footer", BottomFooter);
    app.component("ra-button", RaButton);
    app.component("top-navigation", TopNavigation);
}

export default {
    registerComponents
};