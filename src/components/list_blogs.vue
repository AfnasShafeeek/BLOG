<template>
  <div id="showblogs">
    <h1>Listing Blogs Articles</h1>
    <input type="text" v-model="search" id="search_box" placeholder="search blogs" />
    //here we can go through contents after the search
    <div v-for="blog in filter_search" :key="blog.id" class="single-block">

     <router-link v-bind:to="'/single_blog/'+blog.id"> <h1  v-rainbow>{{ blog.title | to-upper}}</h1></router-link><br>  //using custom directive
  <article>{{blog.body}}</article>
     </div>
    </div>
</template>

<script>

import blog_list from "@/mixins/blog_list";

export default {
  data(){
    return{
     arr:[],
      search:'',
    }
  },
  methods:{

  },
  created(){
     this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data)=>{
     this.arr = data.body.slice(0,10)           //slice is used to slice particaular numberr of elements in the array of object
   console.log(data)
     })                                      //life hook
  },
  computed:{

  },
  filter:{
    touppercase:function(value){
      return value.toUpperCase()
    }
  },
  mixins:[blog_list]
}
</script>

<style scoped>
#showblogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-block{
  background: #eee;
  padding: 5px;
  margin: 20px 0;
  box-sizing: border-box;
}
#search_box{
  width: 100%;
  height: 20px;
}
</style>