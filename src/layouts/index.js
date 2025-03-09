import Blank from "./Blank.vue";
import Default from "./Default.vue";

function registerComponents(app) {
    app.component("layout-blank", Blank);
    app.component("layout-default", Default);
}

export default {
    registerComponents
};