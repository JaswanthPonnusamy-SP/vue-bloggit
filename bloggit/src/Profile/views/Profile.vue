<template>
  <div style="width: 1200px;height: calc(100vh - 107px);margin: auto;display: flex;flex-direction: column;background: white;">
    <div style="width: 100%;height: 190px;margin-top: 50px;display: flex;flex-direction: column;align-items: center;">
      <img :src="profile.IMAGE_URL" height="106" width="106" style="border-radius: 50%;">
      <div style="font-size: 26px;font-weight: 500;color: black;margin-top: 5px;">{{ profile.USER_NAME }}</div>
      <div style="font-size: 13px;font-weight: 500;color: #4755A9;margin-top: 20px;margin-bottom: 20px;">
        {{ profile.EMAIL }}</div>
    </div>
    <div style="height: calc(100% - 240px);width: 100%;">
      <div style="margin-top: 15px;height: 60px;width: 100%;background: white;display: flex;justify-content: center;border-top: 1px solid #f4f4f6;border-bottom: 1px solid #f4f4f6;">
        <div style="cursor:pointer;width: 200px;height: 100%;display: flex;justify-content: center;align-items: center;" :class="selected==='bloggs'?'border':''" @click="changeSelect('bloggs')">
          <div style="height: 35px;width: 35px;background: #B1DBFC;opacity: 0.9;display: flex;justify-content: center;align-items: center;border-radius: 50%;">
            <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="bx-bxl-blogger" transform="translate(-3.000000, -3.000000)" fill-rule="nonzero">
                  <path d="M20.954,10.667 C20.882,10.345 20.682,10.046 20.452,9.922 C20.382,9.883 19.93,9.834 19.448,9.813 C18.639,9.777 18.55,9.761 18.296,9.612 C17.891,9.375 17.78,9.119 17.778,8.425 C17.776,7.098 17.224,5.866 16.132,4.755 C15.356,3.962 14.487,3.426 13.498,3.126 C13.262,3.054 12.73,3.029 10.953,3.008 C8.166,2.975 7.548,3.032 6.597,3.41 C4.849,4.107 3.589,5.576 3.132,7.46 C3.045,7.813 3.029,8.38 3.008,11.637 C2.983,15.717 3.012,16.317 3.266,17.125 C3.478,17.793 3.691,18.202 4.127,18.782 C4.962,19.89 6.21,20.689 7.461,20.915 C8.056,21.022 15.392,21.05 16.144,20.947 C17.45,20.769 18.475,20.245 19.437,19.263 C20.131,18.553 20.566,17.784 20.851,16.764 C20.968,16.34 20.978,16.134 21,13.647 C21.017,11.769 21.002,10.889 20.954,10.667 Z M8.007,8.108 C8.32,7.792 8.406,7.779 10.371,7.779 C12.135,7.779 12.193,7.783 12.452,7.913 C12.827,8.102 12.99,8.369 12.99,8.793 C12.99,9.177 12.837,9.446 12.497,9.662 C12.313,9.777 12.204,9.785 10.476,9.795 C9.409,9.802 8.56,9.782 8.433,9.747 C7.764,9.563 7.515,8.604 8.007,8.108 L8.007,8.108 Z M15.713,16.145 L15.116,16.243 L12.002,16.278 C9.266,16.311 8.491,16.26 8.35,16.198 C8.062,16.074 7.796,15.726 7.748,15.418 C7.706,15.126 7.852,14.722 8.078,14.518 C8.363,14.261 8.487,14.252 11.989,14.248 C15.591,14.246 15.572,14.245 15.914,14.563 C16.396,15.013 16.295,15.814 15.713,16.145 Z" id="Shape" fill="#4CB1FF"></path>
                  <rect id="Rectangle" fill-opacity="0" fill="#000000" x="0" y="0" width="24" height="24"></rect>
                </g>
              </g>
            </svg>
          </div>
          <div style="margin-left: 10px;" class="title">Bloggs</div>
        </div>
        <div style="cursor:pointer;;width: 200px;height: 100%;display: flex;justify-content: center;align-items: center;border-left: 1px solid #f4f4f6;" :class="selected==='description'?'border':''" @click="changeSelect('description')">
            <div style="height: 35px;width: 35px;background: #FAD4D7;opacity: 0.9;display: flex;justify-content: center;align-items: center;border-radius: 50%;">
              <svg width="20px" height="14px" viewBox="0 0 20 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="fluent-text-description-24-filled" transform="translate(-2.000000, -5.000000)" fill-rule="nonzero">
                    <g id="Group" transform="translate(2.000000, 5.000000)" fill="#FF4451">
                      <path d="M1,12 L13,12 C13.5290934,12.0005869 13.9661648,12.4132105 13.9971721,12.9413948 C14.0281794,13.4695792 13.6423904,13.9305092 13.117,13.993 L13,14 L1,14 C0.470906608,13.9994131 0.0338352147,13.5867895 0.00282790456,13.0586052 C-0.0281794056,12.5304208 0.357609613,12.0694908 0.883,12.007 L1,12 L13,12 L1,12 Z M1,8 L19,8 C19.5290934,8.00058686 19.9661648,8.41321046 19.9971721,8.94139481 C20.0281794,9.46957917 19.6423904,9.93050917 19.117,9.993 L19,10 L1,10 C0.470906608,9.99941314 0.0338352147,9.58678954 0.00282790456,9.05860519 C-0.0281794056,8.53042083 0.357609613,8.06949083 0.883,8.007 L1,8 L19,8 L1,8 Z M1,4 L19,4 C19.5290934,4.00058686 19.9661648,4.41321046 19.9971721,4.94139481 C20.0281794,5.46957917 19.6423904,5.93050917 19.117,5.993 L19,6 L1,6 C0.470906608,5.99941314 0.0338352147,5.58678954 0.00282790456,5.05860519 C-0.0281794056,4.53042083 0.357609613,4.06949083 0.883,4.007 L1,4 L19,4 L1,4 Z M1,0 L19,0 C19.5290934,0.000586860016 19.9661648,0.413210463 19.9971721,0.941394814 C20.0281794,1.46957917 19.6423904,1.93050917 19.117,1.993 L19,2 L1,2 C0.470906608,1.99941314 0.0338352147,1.58678954 0.00282790456,1.05860519 C-0.0281794056,0.530420834 0.357609613,0.069490825 0.883,0.007 L1,0 L19,0 L1,0 Z" id="Shape"></path>
                    </g>
                    <rect id="Rectangle" fill-opacity="0" fill="#000000" x="0" y="0" width="24" height="24"></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div style="margin-left: 10px;" class="title">Description</div>
        </div>
        <div style="cursor: pointer;width: 200px;height: 100%;display: flex;justify-content: center;align-items: center;border-left: 1px solid #f4f4f6;" :class="selected==='followers'?'border':''" @click="changeSelect('followers')">
            <div style="height: 35px;width: 35px;background: #B1DBFC;opacity: 0.9;display: flex;justify-content: center;align-items: center;border-radius: 50%;">
              <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="bx-bxl-blogger" transform="translate(-3.000000, -3.000000)" fill-rule="nonzero">
                    <path d="M20.954,10.667 C20.882,10.345 20.682,10.046 20.452,9.922 C20.382,9.883 19.93,9.834 19.448,9.813 C18.639,9.777 18.55,9.761 18.296,9.612 C17.891,9.375 17.78,9.119 17.778,8.425 C17.776,7.098 17.224,5.866 16.132,4.755 C15.356,3.962 14.487,3.426 13.498,3.126 C13.262,3.054 12.73,3.029 10.953,3.008 C8.166,2.975 7.548,3.032 6.597,3.41 C4.849,4.107 3.589,5.576 3.132,7.46 C3.045,7.813 3.029,8.38 3.008,11.637 C2.983,15.717 3.012,16.317 3.266,17.125 C3.478,17.793 3.691,18.202 4.127,18.782 C4.962,19.89 6.21,20.689 7.461,20.915 C8.056,21.022 15.392,21.05 16.144,20.947 C17.45,20.769 18.475,20.245 19.437,19.263 C20.131,18.553 20.566,17.784 20.851,16.764 C20.968,16.34 20.978,16.134 21,13.647 C21.017,11.769 21.002,10.889 20.954,10.667 Z M8.007,8.108 C8.32,7.792 8.406,7.779 10.371,7.779 C12.135,7.779 12.193,7.783 12.452,7.913 C12.827,8.102 12.99,8.369 12.99,8.793 C12.99,9.177 12.837,9.446 12.497,9.662 C12.313,9.777 12.204,9.785 10.476,9.795 C9.409,9.802 8.56,9.782 8.433,9.747 C7.764,9.563 7.515,8.604 8.007,8.108 L8.007,8.108 Z M15.713,16.145 L15.116,16.243 L12.002,16.278 C9.266,16.311 8.491,16.26 8.35,16.198 C8.062,16.074 7.796,15.726 7.748,15.418 C7.706,15.126 7.852,14.722 8.078,14.518 C8.363,14.261 8.487,14.252 11.989,14.248 C15.591,14.246 15.572,14.245 15.914,14.563 C16.396,15.013 16.295,15.814 15.713,16.145 Z" id="Shape" fill="#4CB1FF"></path>
                    <rect id="Rectangle" fill-opacity="0" fill="#000000" x="0" y="0" width="24" height="24"></rect>
                  </g>
                </g>
              </svg>
            </div>
            <div style="margin-left: 10px;">
              <div class="title">{{ profile.FOLLOWERS }}</div>
              <div style="font-size: 14px;">Followers</div>
            </div>
        </div>
        <div style="cursor: pointer;width: 200px;height: 100%;display: flex;justify-content: center;align-items: center;border-left: 1px solid #f4f4f6;" :class="selected==='following'?'border':''" @click="changeSelect('following')">
            <div style="height: 35px;width: 35px;background: #B1DBFC;opacity: 0.9;display: flex;justify-content: center;align-items: center;border-radius: 50%;">
              <svg width="19px" height="19px" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="bx-bxl-blogger" transform="translate(-3.000000, -3.000000)" fill-rule="nonzero">
                    <path d="M20.954,10.667 C20.882,10.345 20.682,10.046 20.452,9.922 C20.382,9.883 19.93,9.834 19.448,9.813 C18.639,9.777 18.55,9.761 18.296,9.612 C17.891,9.375 17.78,9.119 17.778,8.425 C17.776,7.098 17.224,5.866 16.132,4.755 C15.356,3.962 14.487,3.426 13.498,3.126 C13.262,3.054 12.73,3.029 10.953,3.008 C8.166,2.975 7.548,3.032 6.597,3.41 C4.849,4.107 3.589,5.576 3.132,7.46 C3.045,7.813 3.029,8.38 3.008,11.637 C2.983,15.717 3.012,16.317 3.266,17.125 C3.478,17.793 3.691,18.202 4.127,18.782 C4.962,19.89 6.21,20.689 7.461,20.915 C8.056,21.022 15.392,21.05 16.144,20.947 C17.45,20.769 18.475,20.245 19.437,19.263 C20.131,18.553 20.566,17.784 20.851,16.764 C20.968,16.34 20.978,16.134 21,13.647 C21.017,11.769 21.002,10.889 20.954,10.667 Z M8.007,8.108 C8.32,7.792 8.406,7.779 10.371,7.779 C12.135,7.779 12.193,7.783 12.452,7.913 C12.827,8.102 12.99,8.369 12.99,8.793 C12.99,9.177 12.837,9.446 12.497,9.662 C12.313,9.777 12.204,9.785 10.476,9.795 C9.409,9.802 8.56,9.782 8.433,9.747 C7.764,9.563 7.515,8.604 8.007,8.108 L8.007,8.108 Z M15.713,16.145 L15.116,16.243 L12.002,16.278 C9.266,16.311 8.491,16.26 8.35,16.198 C8.062,16.074 7.796,15.726 7.748,15.418 C7.706,15.126 7.852,14.722 8.078,14.518 C8.363,14.261 8.487,14.252 11.989,14.248 C15.591,14.246 15.572,14.245 15.914,14.563 C16.396,15.013 16.295,15.814 15.713,16.145 Z" id="Shape" fill="#4CB1FF"></path>
                    <rect id="Rectangle" fill-opacity="0" fill="#000000" x="0" y="0" width="24" height="24"></rect>
                  </g>
                </g>
              </svg>
            </div>
          <div style="margin-left: 10px;">
            <div class="title">{{profile.FOLLOWING}}</div>
            <div style="font-size: 14px;">Following</div>
          </div>
        </div>
      </div>

      <div style="height: calc(100% - 107px);width: 100%;padding-top: 20px;padding-bottom: 10px;">
        <div v-if="selected==='bloggs'" style="overflow: scroll;height: calc(100%);width: inherit;">
          <div>
          <div class="popular-blog" v-for="item in popularBlogs" @click="changeLocation(item.link)" style="cursor: pointer;">
            <div style="width: calc(100% - 220px);margin-right: 20px;align-items: center;">
              <div style="display: flex;padding-bottom: 8px;">
                <img :src="item.AUTHOR_IMAGE_URL" width="20" height="20" style="border-radius: 50%;">
                <div class="popular-blog-username">{{ item.AUTHOR_NAME }}</div>
              </div>
              <div class="popular-blog-title">
                {{ item.TITLE }}
              </div>
              <div class="popular-blog-firstline">
                {{item.FIRST_LINE }}
              </div>
              <div class="popular-blog-end">
                <div>{{ item.CREATED }}</div>
                <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>
                <div>{{item.READ_TIME}} min read</div>
              </div>
            </div>

            <div>
              <img :src="item.BLOG_IMAGE_URL" style="width: 200px; height: 134px;">
            </div>
          </div>
          </div>
        </div>
        <div v-if="selected==='description'" style="overflow: scroll;height: calc(100%);width: inherit;">
          <div style="padding: 50px 100px;text-align: center;font-size: 17px">{{profile.DESCRIPTION}}</div>
        </div>
        <div v-if="selected==='followers'" style="overflow: scroll;height: calc(100%);width: inherit;">
          <div style="display: flex;flex-wrap: wrap;padding: 20px 30px;background: #f5f5f8;">
            <div class="profile" v-for="item in followers">
              <div class="img-container">
                <img :src="item.IMAGE_URL" class="profile-img">
              </div>
              <div class="profile-text-container">
                <div class="profile-title">{{ item.USER_NAME }}</div>
                <div class="profile-description">{{ item.DESCRIPTION }}</div>
              </div>
              <div class="profile-button-container">
                <div class="profile-follow-button">Follow</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="selected==='following'" style="overflow: scroll;height: calc(100%);width: inherit;">
          <div style="display: flex;flex-wrap: wrap;padding: 20px 30px;background: #f5f5f8;">
            <div class="profile" v-for="item in following">
              <div class="img-container">
                <img :src="item.IMAGE_URL" class="profile-img">
              </div>
              <div class="profile-text-container">
                <div class="profile-title">{{ item.USER_NAME }}</div>
                <div class="profile-description">{{ item.DESCRIPTION }}</div>
              </div>
              <div class="profile-button-container">
                <div class="profile-follow-button">Follow</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'profile',
    components: {},
    data(){
      return{
        showPassword:false,
        password :true,
        selected: "",
        popularBlogs:[],
        followers:[],
        following:[],
        profile:{}
      }
    },
    mounted() {
      this.selected="bloggs";
      this.getProfile();
      this.getUserBlogs();
    },
    computed:{
        showId() {
          return this.$route.params.id;
        }
    },
    methods:{
      changeSelect(value){
        this.selected=value;
        if(this.selected==="followers"){
          this.getFollowers();
        }
        else if(this.selected==="following"){
          this.getFollowing();
        }
        else if(this.selected==="bloggs"){
          this.getUserBlogs()
        }
      },
      getUserBlogs(){
	  this.popularBlogs=[];
        this.GET("/ProfileBlogs?userid="+this.showId).then((message)=>{
          let jsonObj=JSON.parse(message);
          jsonObj.DATA.forEach((element)=>{
            this.popularBlogs.push(element);
          });
        });
      },
      getFollowing(){
	  this.following=[];
        this.GET("/ShowFollowing?userid="+this.showId).then((message)=>{
          let jsonObj=JSON.parse(message);
          jsonObj.DATA.forEach((element)=>{
            this.following.push(element);
          });

        });
      },
      getFollowers(){
	  this.followers=[];
        this.GET("/ShowFollower?userid="+this.showId).then((message)=>{
          let jsonObj=JSON.parse(message);
          jsonObj.DATA.forEach((element)=>{
            this.followers.push(element);
          });
        });
      },
      getProfile(){
        this.GET(`/PublicProfile/${this.showId}`).then((message)=>{
          let jsonObj=JSON.parse(message);
          this.profile=jsonObj.DATA[0];
        });
      },
      changePasswordFieldType(){
        let el;
        el = this.$refs.password;
        this.showPassword=!this.showPassword;
        setTimeout(() => el.focus(),el.setSelectionRange(el.value.length, el.value.length));
      },
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
      }
    }
  }
</script>
<style scoped>

.title{
  font-size: 20px;
  font-weight: 500;
}

.border{
  border-bottom: 3px solid #90cd8f;
}

.popular-blog{
  width: calc(100% - 100px);
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border-bottom: 1px solid #f7f5f5;
}

.popular-blog-username{
  margin-left: 10px;font-size: 13px;letter-spacing: 0.5px;font-weight: 500;color: rgba(41, 41, 41, 1);display: flex;align-items: center
}

.popular-blog-title{
  padding-bottom: 4px;font-size: 22px;font-weight: 700;max-height: 56px;
}

.popular-blog-end{
  font-size: 13px;
  color: #757575;
  display: flex;
  padding-top: 8px;
}

.popular-blog-firstline{
  font-size: 16px;
  color: #757575;
  max-height: 40px;
  overflow: hidden;
}

.profile{
  margin: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  align-items: center;
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
  margin-top: 5px;
}

.profile-button-container{
  margin-top: 20px;
  padding-left: 8px;
  /*width: calc(100% - 256px);*/
  /*height: 100%;*/
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
  text-align: center;
}

.profile-description{
  text-overflow: ellipsis;
  font-size: 11px;
  overflow: hidden;
  color: rgba(117, 117, 117, 1);
  font-weight: 400;
  max-height: 50px;
  text-align: center;
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
  width: 100px;
  height: 32px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
}

</style>
