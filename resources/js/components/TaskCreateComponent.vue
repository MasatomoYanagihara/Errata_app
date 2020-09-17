<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <form @submit.prevent="submit">
          <div class="form-group row">
            <label for="title" class="col-sm-3 col-form-label">タイトル</label>
            <input type="text" class="col-sm-9 form-control" id="title" v-model="task.title" />
          </div>
          <div class="form-group row">
            <label for="publisher" class="col-sm-3 col-form-label">出版社</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="publisher"
              v-model="task.publisher"
            />
          </div>
          <div class="form-group row">
            <label for="author" class="col-sm-3 col-form-label">著者</label>
            <input type="text" class="col-sm-9 form-control" id="author" v-model="task.author" />
          </div>
          <div class="form-group row">
            <label for="year_of_publication" class="col-sm-3 col-form-label">出版年</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="year_of_publication"
              v-model="task.year_of_publication"
            />
          </div>
          <button type="submit" class="btn btn-secondary">登録</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      task: {
        title: "",
        author: "",
        publisher: "",
        year_of_publication: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post("/api/tasks", this.task)
        .then((res) => {
          this.$router.push({ name: "task.list" }); // データ登録後、一覧ページにリダイレクト
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>