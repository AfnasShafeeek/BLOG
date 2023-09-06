export default {
computed:{
    //this function is used to derach a title in the search box
   filter_search:function(){
   return this.arr.filter((arr)=>{
     return arr.title.match(this.search)
   })
   },
  },
}