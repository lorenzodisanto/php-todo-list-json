const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
      todoList: [],
      newItem: "",
    };
  },

  methods: {
    // richiesta axios
    fetchTodoList() {
      axios
        .get("http://localhost/php-todo-list-json/backend/api/get-list.php")
        .then((response) => {
          // stampo dati ricevuti
          this.todoList = response.data;
        });
    },

    // aggiunta nuovo item
    addNewItem() {
      const item = this.newItem;

      console.log(item);
      this.newItem = "";

      //   parametri chiamata axios
      const data = { item };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      //   chiamata post al php
      axios
        .post(
          "http://localhost/php-todo-list-json/backend/api/store-item.php",
          data,
          params
        )
        .then((response) => {
          console.log(response.data);
        });
    },
  },

  //   richiesta al caricamento della pagina
  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
