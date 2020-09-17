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
            <label for="content" class="col-sm-3 col-form-label">出版社</label>
            <input type="text" class="col-sm-9 form-control" id="content" v-model="task.content" />
          </div>
          <div class="form-group row">
            <label for="person-in-charge" class="col-sm-3 col-form-label">編集者</label>
            <input
              type="text"
              class="col-sm-9 form-control"
              id="person-in-charge"
              v-model="task.person_in_charge"
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
        content: "",
        person_in_charge: "",
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