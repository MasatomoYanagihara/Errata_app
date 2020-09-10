<template>
  <div class="container">
    <table class="table table-hover">
      <thead class="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">タイトル</th>
          <th scope="col">内容</th>
          <th scope="col">編集者</th>
          <th scope="col">詳細</th>
          <th scope="col">編集</th>
          <th scope="col">削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <th scope="row">{{ task.id }}</th>
          <td>{{ task.title }}</td>
          <td>{{ task.content }}</td>
          <td>{{ task.person_in_charge }}</td>
          <td>
            <router-link :to="{name: 'task.show', params: {taskId: task.id }}">
              <button class="btn btn-primary">詳細</button>
            </router-link>
          </td>
          <td>
            <router-link :to="{name: 'task.edit', params: {taskId: task.id }}">
              <button class="btn btn-success">編集</button>
            </router-link>
          </td>
          <td>
            <button class="btn btn-danger" @click="deleteTask(task.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    getTasks() {
      axios.get("/api/tasks").then((res) => {
        this.tasks = res.data;
      });
    },
    deleteTask(id) {
      axios.delete("/api/tasks/" + id).then((res) => {
        this.getTasks(); // データ削除後、データ一覧を再読み込み
      });
    },
  },
  mounted() {
    this.getTasks();
  },
};
</script>