<template>
<div id="sinle">
<h1>TITLE :{{blog.title}}</h1>
  <article>Content: {{blog.content}}</article>
  <p>Auther :{{blog.auther}}</p>
  <ul>
    <li v-for="ar in blog.catogaries" :key="ar.id">{{ ar }}</li>
  </ul>

</div>
</template>

<script>
export default {
data(){
  return{
    id:this.$route.params.id,
    blog:{},
  }
},
  created() {
  this.$http.get('https://tutorial-a8cd0-default-rtdb.firebaseio.com/posts/'+this.id+'.json').then(function(data) {
    return data.json();
  }).then(function (data){
    this.blog= data;
  })

  }
}
</script>

<style scoped>

</style>