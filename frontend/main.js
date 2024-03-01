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
      axios.get("../backend/api/get-list.php").then((response) => {
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
        .post("../backend/api/store-item.php", data, params)
        .then((response) => {
          // console.log(response.data);
          //   stampo nel frontend il nuovo item
          this.todoList = response.data;
        });
    },

    // cambio dello status
    changeStatus(item, index) {
      const newStatus = !index.done;

      //   parametri chiamata axios
      const data = { index, text: item.text, done: newStatus };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      //   chiamata post al php
      axios
        .post("../backend/api/status-item.php", data, params)
        .then((response) => {
          // console.log(response.data);
          //   stampo item aggiornato
          this.todoList = response.data;
        });
    },

    // cancella elemento dalla lista
    deleteItem(index) {
      // parametri
      const data = { index };

      const params = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      // chiamata axios
      axios
        .post("../backend/api/delete-item.php", data, params)
        .then((response) => {
          this.todoList = response.data;
        });
    },
  },

  //   richiesta al caricamento della pagina
  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
