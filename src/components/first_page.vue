<template>
  <div id="add-blog">
 <h1>Add a new blog spot</h1>
  <form v-if="!submitted">
    <label>Blog Title</label>
    <input type="text" v-model.lazy="blog.title">   //v-model is used to bind the input from the form  ,  ,blog.title used becuase content is a key value in the blog object
    <label>Blog Content</label>
    <textarea v-model.lazy="blog.content"></textarea>
    <div id="checkboxes">
     <label>Malayalam</label>
      <input type="checkbox" value="malayalam" v-model="blog.catogaries"/>

      <label>English</label>
      <input type="checkbox" value="english" v-model="blog.catogaries"/>

      <label>Hindi</label>
      <input type="checkbox" value="hindi" v-model="blog.catogaries"/>

      <label>Tamil</label>
      <input type="checkbox" value="tamil" v-model="blog.catogaries"/>
    </div>

    <select v-model="blog.auther">
      <option v-for="author in authers" :key= "author.id">{{ author }}</option>
    </select>
   <button @click.prevent="post">Submit</button> //prevent is to preventdefault behaviour of button
  </form>
 <div v-if="submitted" id="result">
 <h1>Sucessfully registered</h1>
 </div>
    <div id="prev">
     <p> Entered title : {{blog.title}}</p>
      <br>
      <p> Entered content : {{blog.content}} </p>
      <P>Catagories </P>
      <ul>
        <li v-for="catogory in blog.catogaries" :key= "catogory.id ">{{ catogory }}</li>
      </ul>

       <p> Auther : {{blog.auther}} </p>
    </div>
    </div>
</template>

<script>

export default {
 data(){
   return{
  blog:
    {
      title:"",
      content:"",
      catogaries:[],
      auther : "",
    },

     authers:["vue","Angular","react"],
      submitted:false,


 }
 },
  methods:{
    post:function(){
      this.$http.post('https://tutorial-a8cd0-default-rtdb.firebaseio.com/posts.json',this.blog).then((data)=>{
            console.log(data)
        this.submitted=true
      })//first link is used to connect the application with an online api,second kalue is the data that we want to sent



    }
  }

}
</script>

<style>
#add-blog*{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  max-width: 500px;
}

</style>
