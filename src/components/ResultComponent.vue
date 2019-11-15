<template>
  <div>
    <div class="container" id="result">
      <textarea readonly="readonly" id="result" v-model="post.result" rows="20" style="width:690px">
      </textarea>
    </div>
  </div>
</template>

<script>

export default {
  data() {
      return {
        post: {
          result : 'hello'
        }
      }
    },
    created() {
      console.log(this.$route.params.result)
      console.log(this.post.result)
      if(this.$route.params.result != null) {
        this.post.result = this.$route.params.result
      }
    }
}
</script>
<style scoped>

</style>