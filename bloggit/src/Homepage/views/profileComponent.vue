<template>
  <div class="profile">
    <el-alert v-if="error.show" :title="error.message" type="info" style="position: absolute;" />
    <div class="img-container" style="cursor: pointer;" @click="changeLocation(data.LINK)">
      <img :src="data.IMAGE_URL" class="profile-img">
    </div>
    <div class="profile-text-container" style="cursor: pointer;" @click="changeLocation(data.LINK)">
      <div class="profile-title">{{ data.USERNAME }}</div>
      <div class="profile-description">{{ data.DESCRIPTION }}</div>
    </div>
    <div class="profile-button-container">
      <el-button class="profile-follow-button" :disabled="disabled" :style="follow==='Follow'?'cursor: pointer;':'cursor: pointer;background: #409eff;border-color: #409eff;'" @click="followww()">{{follow}}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "profileComponent",
  props:{
    data:Object
  },
  data() {
    return{error:{show:false,message:""},follow:"Follow",disabled:false}
  },
  methods:{
      followww() {
        let userId=this.data.LINK.split('/')[this.data.LINK.split('/').length-1];
        this.disabled=true;
        if(this.follow==="Follow") {
          this.GET("/Follow?userid=" + userId).then(
              (message) => {
                let jsonObj = JSON.parse(message);
                this.disabled=false;
                if (jsonObj.MESSAGE === "success") {
                  this.error.show = true;
                  this.error.message = "Successfully followed."
                  this.follow = "Unfollow";
                  setTimeout(() => {
                    this.error = false;
                    this.error.message = ""
                  }, 3000);
                } else {
                  this.error.show = true;
                  this.error.message = "Already following this account."
                  this.follow = "Unfollow";
                  setTimeout(() => {
                    this.error = false;
                    this.error.message = ""
                  }, 3000);
                }

              });
        }
        else{
          this.GET("/Unfollow?userid=" + userId).then(
              (message) => {
                let jsonObj = JSON.parse(message);
                this.disabled=false;
                if (jsonObj.MESSAGE === "success") {
                  this.error.show = true;
                  this.error.message = "Successfully unfollowed."
                  this.follow = "Follow";
                  setTimeout(() => {
                    this.error = false;
                    this.error.message = ""
                  }, 3000);
                }

              });
        }
            },
            changeLocation(url)
              {
                window.location.href = url;
              }
            ,
            GET(url)
              {
                return new Promise(function (resolve, reject) {

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
              }
            }

            }
</script>

<style scoped>
.profile{
  height: 64px;
  width: 100%;
  padding-bottom: 16px;
  display: flex;
}

.img-container{
  width: 64px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-text-container{
  padding-left: 8px;
  width: 176px;
  height: 100%;
}

.profile-button-container{
  padding-left: 8px;
  width: calc(100% - 256px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-img{
  border-radius: 50%;
  height: 64px;
  width: 64px;
}

.profile-title{
  padding-bottom: 4px;
  font-weight: 600;
  font-size: 13px;
  color: rgba(41, 41, 41, 1);
  line-height: 20px;
}

.profile-description{
  text-overflow: ellipsis;
  font-size: 11px;
  overflow: hidden;
  color: rgba(117, 117, 117, 1);
  font-weight: 400;
  max-height: 30px;
}

.profile-follow-button{
  color: rgba(255, 255, 255, 1);
  border-color: rgb(26, 137, 23);
  background: rgb(26, 137, 23);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 30px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}
</style>