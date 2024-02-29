const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
    };
  },
});

app.mount("#app");
