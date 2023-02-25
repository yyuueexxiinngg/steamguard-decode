import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import Long from "long";
import protobuf from "protobufjs";
protobuf.util.Long = Long;
protobuf.configure();

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
