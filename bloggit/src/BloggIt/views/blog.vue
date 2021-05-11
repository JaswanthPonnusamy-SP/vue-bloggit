<template>
  <div>
  <div style='width: 680px;height: max-content;margin: auto;'>
    <div id='blog-title' style="color:#292929">{{blog.TITLE}}</div>
    <div style="color:#757575;font-size:22px;margin-top: 20px;">{{blog.DESCRIPTION}}</div>
    <div id='blog-details'>
      <div style='display: flex;align-items: center;'>
        <img :src='blog.AUTHOR_IMAGE_URL' width='30' height='30'>
        <div id='blog-details-cb' style="font-size: 14px;">Created By</div>
        <div id='blog-details-user' style="font-size: 14px;cursor: pointer;">{{blog.USER_NAME}}</div>
      </div>
      <div style='display: flex;align-items: center;justify-content: center;'>
        <svg width='25' height='25' class='r'><g fill-rule='evenodd'><path d='M15.6 5a.42.42 0 0 0 .17-.3.42.42 0 0 0-.12-.33l-2.8-2.79a.5.5 0 0 0-.7 0l-2.8 2.8a.4.4 0 0 0-.1.32c0 .12.07.23.16.3h.02a.45.45 0 0 0 .57-.04l2-2V10c0 .28.23.5.5.5s.5-.22.5-.5V2.93l2.02 2.02c.08.07.18.12.3.13.11.01.21-.02.3-.08v.01'></path><path d='M18 7h-1.5a.5.5 0 0 0 0 1h1.6c.5 0 .9.4.9.9v10.2c0 .5-.4.9-.9.9H6.9a.9.9 0 0 1-.9-.9V8.9c0-.5.4-.9.9-.9h1.6a.5.5 0 0 0 .35-.15A.5.5 0 0 0 9 7.5a.5.5 0 0 0-.15-.35A.5.5 0 0 0 8.5 7H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2'></path></g></svg>
      </div>
    </div>
    <div style='margin-top: 20px;'>
      <img :src='blog.IMAGE_URL' width='680' height='470'>
    </div>
    <div style='margin-top: 40px;margin-bottom: 30px;' v-html="blog.BODY"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  data(){
return{blog:{}}
  },
  mounted() {
    this.getUserBlogs();
  },
  computed:{
    showId() {
      return this.$route.params.id;
    }
  },
  methods:{
    changeLocation(url){
      window.location.href=url;
    },
    GET(url) {
      return new Promise(function(resolve, reject) {

        const request = new XMLHttpRequest();

        request.open('GET', url);
        request.onload = () => {

          resolve(request.response); // we got data here, so resolve the Promise

        };

        request.onerror = () => {
          reject(Error('Error fetching data.')); // error occurred, reject the  Promise
        };

        request.send(); // send the request
      });
    },
    getUserBlogs(){
      this.blog={};
      this.GET("/Blogs/"+this.showId).then((message)=>{
        let jsonObj=JSON.parse(message);
        this.blog=jsonObj.DATA[0];
      });
    },
  }
}
</script>

<style scoped>
#blog-title{height: max-content;width: 100%;text-align: left;font-size: 44px;color: rgb(41, 41, 41);font-weight: 500;margin-top: 50px;}#blog-details{display: flex;margin-top: 20px;justify-content: space-between;}#blog-details-cb{color: rgba(117, 117, 117, 1);margin-left: 20px;}#blog-details-user{color: rgba(26, 137, 23, 1);margin-left: 5px;}svg{fill: rgba(117, 117, 117, 1);}
</style>