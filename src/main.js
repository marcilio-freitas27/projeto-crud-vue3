import App from "./App.vue";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);

// vue
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Panel from "primevue/panel";
import Toolbar from "primevue/toolbar";
import PanelMenu from "primevue/panelmenu";
import InputText from "primevue/inputtext";

// vue
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Panel", Panel);
app.component("Toolbar", Toolbar);
app.component("PanelMenu", PanelMenu);
app.component("InputText", InputText);

app.use(PrimeVue, {
  unstyled: false,
});
app.mount("#app");
