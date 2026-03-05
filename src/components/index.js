import BottomFooter from "./BottomFooter.vue";
import MobileNavigation from "./MobileNavigation.vue";
import PerfumeNotes from "./PerfumeNotes.vue";
import PopupScreen from "./PopupScreen.vue";
import RaButton from "./RaButton.vue";
import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("bottom-footer", BottomFooter);
    app.component("mobile-navigation", MobileNavigation);
    app.component("perfume-notes", PerfumeNotes);
    app.component("popup-screen", PopupScreen);
    app.component("ra-button", RaButton);
    app.component("top-navigation", TopNavigation);
}

export default {
    registerComponents
};