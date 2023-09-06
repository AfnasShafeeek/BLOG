<template>
  <div>
    <nav>
  <ul>
    <li><router-link to="/" exact>BLOG</router-link></li>  //while using exact we stop activation of other link ,it will activate only current link
    <li><router-link to="/add" exact>ADD BLOG</router-link></li>
    <li><router-link to="/list" exact>LIST BLOG</router-link></li>
    <li><router-link to="/single_blog" exact > single page vue</router-link></li>
  </ul>

</nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li{
  display: inline-block;
  margin: 0 10px;

}
a{
  display: inline-block;
  margin: 0 12px;
  text-decoration: none;
  padding: 6px 8px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;

}
.router-link-active{
  background:#eee;
  color: #444;
}

</style>