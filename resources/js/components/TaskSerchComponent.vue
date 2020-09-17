
<template>
  <div>
    <h1>タイトル検索</h1>
    <input type="text" v-model="serchTitle" />
    <button @click="serchBook">検索する</button>
    <ul>
      <li v-for="data in getData" :key="data.id">
        <p>名前：{{data.title}} 著者：{{data.author}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serchTitle: "",
      getData: [],
    };
  },
  methods: {
    serchBook() {
      axios
        .get(`/api/serch?title=${this.serchTitle}`)
        .then((res) => {
          console.log(res.data);
          this.getData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>