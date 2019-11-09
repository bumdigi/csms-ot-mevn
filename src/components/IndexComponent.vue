<template>
  <div>
    <h1>Posts</h1>
      <div class="row">
        <div class="col-md-10"></div>
        <div class="col-md-2">
          <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
        </div>
      </div><br/>

      <table class="table table-hover">
        <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post._id">
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
            <td><router-link :to="{name: 'edit', params: { id: post._id }}" class="btn btn-primary">Edit</router-link></td>
            <td><button class="btn btn-danger" @click.prevent="deletePost(post._id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    created() {
      let uri = 'http://localhost:4000/posts'
      this.axios.get(uri).then(reponse => {
        /* eslint-disable no-console */
        console.log(reponse.data)
        this.posts = reponse.data
      })
    },
    methods: {
      deletePost(id) {
        console.log(id)
        let uri = `http://localhost:4000/posts/delete/${id}`
        this.axios.delete(uri).then(response => {
          if (response.status === 200) {
            this.posts.splice(this.posts.findIndex(i => i._id == id), 1)
          }
        })
      }
    }
  }
</script>
