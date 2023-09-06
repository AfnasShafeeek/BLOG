<template>
  <div id="showblogs">
    <h1>All Blogs Articles</h1>
    <input type="text" v-model="search" id="search_box" placeholder="search blogs" />
    //here we can go through contents after the search
    <div v-for="blog in filter_search" :key="blog.id" class="single-block">

     <router-link v-bind:to="'/single_blog/'+blog.id"><h1  v-rainbow>{{ blog.title | to-upper}}</h1></router-link> <br>  //using custom directive
       <h2>{{blog.body | touppercase}}</h2>
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
     this.$http.get('https://tutorial-a8cd0-default-rtdb.firebaseio.com/posts.json').then((data)=> {
       return data.json();       //return in json format
     }).then(function(data){
       var blogsArray = [];
       for(let key in data){
        data[key].id = key
         blogsArray.push(data[key]);
       }
       this.blog = blogsArray
     })
                                          //life hook
  },
  computed:{
    //this function is used to derach a title in the search box

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