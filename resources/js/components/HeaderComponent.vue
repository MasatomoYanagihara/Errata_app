<template>
  <div class="container-fluid bg-dark mb-3">
    <div class="container">
      <nav class="navbar navbar-dark">
        <router-link :to="{name: 'task.list'}">
          <span class="navbar-brand mb-0 h1">正誤表.com</span>
        </router-link>
        <div>
          <router-link :to="{name: 'task.serch'}">
            <button class="btn btn-secondary">検索</button>
          </router-link>
          <router-link :to="{name: 'task.list'}">
            <button class="btn btn-secondary">一覧</button>
          </router-link>
          <router-link :to="{name: 'task.create'}">
            <button class="btn btn-secondary">追加</button>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

 <script>
export default {};
</script>