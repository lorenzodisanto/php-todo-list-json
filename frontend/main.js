const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Todo List",
      todoList: [],
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
  },

  //   richiesta al caricamento della pagina
  mounted() {
    this.fetchTodoList();
  },
});

app.mount("#app");
