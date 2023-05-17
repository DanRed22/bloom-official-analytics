/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import * as Vue from 'vue';
import "./bootstrap";
import { createApp } from "vue";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */
import campaigns from "./components/campaigns.vue";
import navbar from "./components/NavBar.vue";
import sales from "./pages/Sales.vue";
import welcome from "./pages/Welcome.vue";
import PaymentComponent from "./components/PaymentComponent.vue";
import analyticsReports from "./pages/analyticsReports.vue";
import analyticsSideBar from "./components/analyticsSideBar.vue";
import about from "./pages/About.vue";
import works from "./pages/Works.vue";
import subscription from "./pages/Subscription.vue";
import contactUs from "./pages/ContactUs.vue";
import marketingAutomation from "./pages/MarketingAutomation.vue";
import customerService from "./pages/CustomerService.vue";
import index from "./pages/Index.vue";
import analyticsGraphs from "./pages/analyticsGraphs.vue";
import analyticsLocationGraph from "./components/analyticsLocationGraph.vue";
import analyticsPieSales from "./components/analyticsPieSales.vue";
import analyticsStageDealRatio from "./components/analyticsStageDealRatio.vue";

const app = createApp({});

app.component("marketing-automation-component", marketingAutomation)
    .component("campaigns-component", campaigns)
    .component("navbar-component", navbar)
    .component("sales-component", sales)
    .component("welcome-component", welcome)
    .component("payment-component", PaymentComponent)
    .component("analytics-reports-component", analyticsReports)
    .component("analytics-sidebar-component", analyticsSideBar)
    .component("customer-service-component", customerService)
    .component("analytics-graphs-component", analyticsGraphs)
    .component("analytics-location-graphs-component", analyticsLocationGraph)
    .component("analytics-stage-deals-graphs-component", analyticsStageDealRatio)
    .component("analytics-pie-sales-component", analyticsPieSales)
    .component("index-page", index)
    .use(BootstrapVue3)
    .mount("#app");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

// app.mount("#app");
// app.mount("#campaigns");
// app.mount("#marketingAutomation");
// app.mount("#sales");
