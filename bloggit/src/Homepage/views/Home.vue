<template>
  <div>

  <div id="topic-container">
    <div id="top-1" @click="changeLocation(top1.link)" style="cursor: pointer;">
      <div>
      <img :src="top1.BLOG_IMAGE_URL" style="width: 100%; height: 280px;">
      </div>
      <div style="margin-top: 16px;display: flex;">
        <img :src="top1.AUTHOR_IMAGE_URL" width="20" height="20" style="border-radius: 50%;">
        <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">
          {{ top1.AUTHOR_NAME }}</div>
      </div>
      <div style="padding-top: 8px;padding-bottom: 8px;font-size: 22px;font-weight: 700;">
{{top1.TITLE}}
      </div>
      <div id="firstline">
        {{top1.FIRST_LINE}}
      </div>
      <div id="metadata">
        <div>Read More</div>
        <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>
        <div>{{top1.READ_TIME}} min read</div>
      </div>
    </div>

    <div id="tops-4">

      <div class="tops-4-container" v-for="item in top4" @click="changeLocation(item.link)" style="cursor: pointer;">
        <div class="top4-container-text">
          <div class="top-4-creator">
            <img :src="item.AUTHOR_IMAGE_URL" height="20" width="20" style="border-radius: 50%;">
            <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">
              {{ item.AUTHOR_NAME }}</div>
          </div>
          <div class="top-4-title">{{ item.TITLE }}</div>
          <div class="top-4-metadata">
            <div class="meta-start">
            <div>{{item.CREATED}}</div>
            <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>
            <div>{{item.READ_TIME}} min read</div>
            </div>
            <div class="meta-end">
              <svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Group" fill="#757575" fill-rule="nonzero">
                    <path d="M13,2 C13,0.8954305 12.1045695,0 11,0 L2,0 C0.8954305,0 0,0.8954305 0,2 L0,16.66 L0.01,16.66 C0.02,16.76 0.06,16.86 0.13,16.94 C0.316143744,17.1391446 0.627500552,17.1524885 0.83,16.97 L6.5,12.85 L12.16,16.98 C12.2578284,17.0708027 12.3879014,17.1187214 12.5212572,17.1130867 C12.654613,17.1074519 12.7801801,17.0487315 12.87,16.95 C12.9400881,16.868718 12.9821616,16.7670405 12.99,16.66 L13,16.66 L13,2 Z M6.16,11.97 L1,15.64 L1,2 C1,1.44771525 1.44771525,1 2,1 L11,1 C11.5522847,1 12,1.44771525 12,2 L12,15.64 L6.84,11.97 C6.65021831,11.7871274 6.34978169,11.7871274 6.16,11.97 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="top4-container-image">
          <img :src="item.BLOG_IMAGE_URL" width="100" height="100">
        </div>
      </div>


<!--      <div class="tops-4-container">-->
<!--        <div class="top4-container-text">-->
<!--          <div class="top-4-creator">-->
<!--            <img src="https://miro.medium.com/fit/c/64/64/0*d77f12-7zU6s-B_f.jpg" height="20" width="20" style="border-radius: 50%;">-->
<!--            <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">Jaswanth</div>-->
<!--          </div>-->
<!--          <div class="top-4-title">6 Useful GitHub Repositories for All Web Developers</div>-->
<!--          <div class="top-4-metadata">-->
<!--            <div class="meta-start">-->
<!--              <div>Mar 4</div>-->
<!--              <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>-->
<!--              <div>4 min read</div>-->
<!--            </div>-->

<!--            <div class="meta-end">-->
<!--              <svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                  <g id="Group" fill="#757575" fill-rule="nonzero">-->
<!--                    <path d="M13,2 C13,0.8954305 12.1045695,0 11,0 L2,0 C0.8954305,0 0,0.8954305 0,2 L0,16.66 L0.01,16.66 C0.02,16.76 0.06,16.86 0.13,16.94 C0.316143744,17.1391446 0.627500552,17.1524885 0.83,16.97 L6.5,12.85 L12.16,16.98 C12.2578284,17.0708027 12.3879014,17.1187214 12.5212572,17.1130867 C12.654613,17.1074519 12.7801801,17.0487315 12.87,16.95 C12.9400881,16.868718 12.9821616,16.7670405 12.99,16.66 L13,16.66 L13,2 Z M6.16,11.97 L1,15.64 L1,2 C1,1.44771525 1.44771525,1 2,1 L11,1 C11.5522847,1 12,1.44771525 12,2 L12,15.64 L6.84,11.97 C6.65021831,11.7871274 6.34978169,11.7871274 6.16,11.97 Z" id="Shape"></path>-->
<!--                  </g>-->
<!--                </g>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="top4-container-image">-->
<!--          <img src="https://miro.medium.com/fit/c/200/200/1*iXE5khfhaitDWnVvwKCKTg.jpeg" width="100" height="100">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="tops-4-container">-->
<!--        <div class="top4-container-text">-->
<!--          <div class="top-4-creator">-->
<!--            <img src="https://miro.medium.com/fit/c/64/64/0*d77f12-7zU6s-B_f.jpg" height="20" width="20" style="border-radius: 50%;">-->
<!--            <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">Jaswanth</div>-->
<!--          </div>-->
<!--          <div class="top-4-title">6 Useful GitHub Repositories for All Web Developers</div>-->
<!--          <div class="top-4-metadata">-->
<!--            <div class="meta-start">-->
<!--              <div>Mar 4</div>-->
<!--              <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>-->
<!--              <div>4 min read</div>-->
<!--            </div>-->

<!--            <div class="meta-end">-->
<!--              <svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                  <g id="Group" fill="#757575" fill-rule="nonzero">-->
<!--                    <path d="M13,2 C13,0.8954305 12.1045695,0 11,0 L2,0 C0.8954305,0 0,0.8954305 0,2 L0,16.66 L0.01,16.66 C0.02,16.76 0.06,16.86 0.13,16.94 C0.316143744,17.1391446 0.627500552,17.1524885 0.83,16.97 L6.5,12.85 L12.16,16.98 C12.2578284,17.0708027 12.3879014,17.1187214 12.5212572,17.1130867 C12.654613,17.1074519 12.7801801,17.0487315 12.87,16.95 C12.9400881,16.868718 12.9821616,16.7670405 12.99,16.66 L13,16.66 L13,2 Z M6.16,11.97 L1,15.64 L1,2 C1,1.44771525 1.44771525,1 2,1 L11,1 C11.5522847,1 12,1.44771525 12,2 L12,15.64 L6.84,11.97 C6.65021831,11.7871274 6.34978169,11.7871274 6.16,11.97 Z" id="Shape"></path>-->
<!--                  </g>-->
<!--                </g>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="top4-container-image">-->
<!--          <img src="https://miro.medium.com/fit/c/200/200/1*iXE5khfhaitDWnVvwKCKTg.jpeg" width="100" height="100">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="tops-4-container" style="padding-bottom: 0;">-->
<!--        <div class="top4-container-text">-->
<!--          <div class="top-4-creator">-->
<!--            <img src="https://miro.medium.com/fit/c/64/64/0*d77f12-7zU6s-B_f.jpg" height="20" width="20" style="border-radius: 50%;">-->
<!--            <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">Jaswanth</div>-->
<!--          </div>-->
<!--          <div class="top-4-title">6 Useful GitHub Repositories for All Web Developers</div>-->
<!--          <div class="top-4-metadata">-->
<!--            <div class="meta-start">-->
<!--              <div>Mar 4</div>-->
<!--              <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>-->
<!--              <div>4 min read</div>-->
<!--            </div>-->

<!--            <div class="meta-end">-->
<!--              <svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                  <g id="Group" fill="#757575" fill-rule="nonzero">-->
<!--                    <path d="M13,2 C13,0.8954305 12.1045695,0 11,0 L2,0 C0.8954305,0 0,0.8954305 0,2 L0,16.66 L0.01,16.66 C0.02,16.76 0.06,16.86 0.13,16.94 C0.316143744,17.1391446 0.627500552,17.1524885 0.83,16.97 L6.5,12.85 L12.16,16.98 C12.2578284,17.0708027 12.3879014,17.1187214 12.5212572,17.1130867 C12.654613,17.1074519 12.7801801,17.0487315 12.87,16.95 C12.9400881,16.868718 12.9821616,16.7670405 12.99,16.66 L13,16.66 L13,2 Z M6.16,11.97 L1,15.64 L1,2 C1,1.44771525 1.44771525,1 2,1 L11,1 C11.5522847,1 12,1.44771525 12,2 L12,15.64 L6.84,11.97 C6.65021831,11.7871274 6.34978169,11.7871274 6.16,11.97 Z" id="Shape"></path>-->
<!--                  </g>-->
<!--                </g>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="top4-container-image">-->
<!--          <img src="https://miro.medium.com/fit/c/200/200/1*iXE5khfhaitDWnVvwKCKTg.jpeg" width="100" height="100">-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="tops-4-container" style="padding-bottom: 0;">-->
<!--        <div class="top4-container-text">-->
<!--          <div class="top-4-creator">-->
<!--            <img src="https://miro.medium.com/fit/c/64/64/0*d77f12-7zU6s-B_f.jpg" height="20" width="20" style="border-radius: 50%;">-->
<!--            <div style="margin-left: 10px;font-size: 13px;letter-spacing: 2px;font-weight: 500;rgba(41, 41, 41, 1);display: flex;align-items: center">Jaswanth</div>-->
<!--          </div>-->
<!--          <div class="top-4-title">6 Useful GitHub Repositories for All Web Developers</div>-->
<!--          <div class="top-4-metadata">-->
<!--            <div class="meta-start">-->
<!--              <div>Mar 4</div>-->
<!--              <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>-->
<!--              <div>4 min read</div>-->
<!--              <div style="padding-left: 6px;padding-right: 6px;line-height: 11px">.</div>-->

<!--            </div>-->

<!--            <div class="meta-end">-->
<!--              <svg width="13px" height="18px" viewBox="0 0 13 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">-->
<!--                  <g id="Group" fill="#757575" fill-rule="nonzero">-->
<!--                    <path d="M13,2 C13,0.8954305 12.1045695,0 11,0 L2,0 C0.8954305,0 0,0.8954305 0,2 L0,16.66 L0.01,16.66 C0.02,16.76 0.06,16.86 0.13,16.94 C0.316143744,17.1391446 0.627500552,17.1524885 0.83,16.97 L6.5,12.85 L12.16,16.98 C12.2578284,17.0708027 12.3879014,17.1187214 12.5212572,17.1130867 C12.654613,17.1074519 12.7801801,17.0487315 12.87,16.95 C12.9400881,16.868718 12.9821616,16.7670405 12.99,16.66 L13,16.66 L13,2 Z M6.16,11.97 L1,15.64 L1,2 C1,1.44771525 1.44771525,1 2,1 L11,1 C11.5522847,1 12,1.44771525 12,2 L12,15.64 L6.84,11.97 C6.65021831,11.7871274 6.34978169,11.7871274 6.16,11.97 Z" id="Shape"></path>-->
<!--                  </g>-->
<!--                </g>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="top4-container-image">-->
<!--          <img src="https://miro.medium.com/fit/c/200/200/1*iXE5khfhaitDWnVvwKCKTg.jpeg" width="100" height="100">-->
<!--        </div>-->
<!--      </div>-->

    </div>


    <div id="topics">
      <div id="inner-container">
        <div id="bloggers-to-follow">
          <div id="bloggers-to-follow-title">BLOGGERS TO FOLLOW</div>
          <div id="profile-container">
            <div class="profile" v-for="item in bloggersToFollow">
              <div class="img-container">
                <img :src="item.IMAGE_URL" class="profile-img">
              </div>
              <div class="profile-text-container">
                <div class="profile-title">{{ item.USERNAME }}</div>
                <div class="profile-description">{{ item.DESCRIPTION }}</div>
              </div>
              <div class="profile-button-container">
                <div class="profile-follow-button">Follow</div>
              </div>
            </div>
        </div>
        <div id="topics-to-follow">
          <div id="topics-title">TOPICS TO FOLLOW</div>
          <div id="topics-select">
            <el-select v-model="topics" multiple placeholder="Select">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
    <div id="popular-blogs-container">
  <div id="popular-blogs">

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

      <div id="rightside-container">
        <div style="padding: 32px;background-color: rgb(250, 250, 250);height: 73px;width: calc(100% - 64px);display: flex;flex-direction: column;align-items: ">
          <div style="display: flex;">
            <div id="readlater">Bookmark blogs for later</div>
            <div style="display: flex;align-items: center;"><svg width="25" height="25" viewBox="0 0 25 25" class="em" aria-label="bookmark"><path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z" fill-rule="evenodd"></path></svg></div>
          </div>
          <div style="color: rgba(117, 117, 117, 1);font-size: 14px;font-weight: 400;margin-top: 8px;">Start saving stories by clicking the bookmark icon and you’ll find them all here.</div>
        </div>

        <div style="padding-bottom: 30px;border: 1px solid #D1E1FE;margin-top: 30px;padding-right: 30px;padding-left: 30px;padding-top: 20px">
          <div style="text-align: center;margin-bottom: 20px;font-weight: 600;font-size: 18px;">Creators To Follow</div>

          <div class="profile" v-for="item in creatorToFollow">
            <div class="img-container">
              <img :src="item.IMAGE_URL" class="profile-img">
            </div>
            <div class="profile-text-container">
              <div class="profile-title">{{ item.USERNAME }}</div>
              <div class="profile-description">{{ item.DESCRIPTION }}</div>
            </div>
            <div class="profile-button-container">
              <div class="profile-follow-button" style="background: #005FCC;">Follow</div>
            </div>
          </div>

<!--          <div class="profile">-->
<!--            <div class="img-container">-->
<!--              <img src="https://miro.medium.com/fit/c/128/128/1*AwBz4NW9_M45J-sBlmH-lA.png" class="profile-img">-->
<!--            </div>-->
<!--            <div class="profile-text-container">-->
<!--              <div class="profile-title">Barrack Obama</div>-->
<!--              <div class="profile-description">Dad, Husband, President, citizen.</div>-->
<!--            </div>-->
<!--            <div class="profile-button-container">-->
<!--              <div class="profile-follow-button" style="background: #005FCC;">Follow</div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {},
  data(){
    return{
      top1:{},
      top4:[],
      bloggersToFollow:[],
      popularBlogs:[],
      creatorToFollow:[
        {
          USERNAME:"Jaswanth",
          DESCRIPTION:"I'm not a hacker",
          IMAGE_URL:"http://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
        },
        {
          USERNAME:"Venkatesh prasath",
          DESCRIPTION:"A backend developer",
          IMAGE_URL:"http://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
        }
      ],
      options: [{
        value: 1,
        label: 'Art'
      }, {
        value: 2,
        label: 'Books'
      }, {
        value: 3,
        label: 'Comics'
      }, {
        value: 4,
        label: 'Fiction'
      }, {
        value: 5,
        label: 'Film'
      },
        {
          value: 6,
          label: 'Gaming'
        }
        ,
        {
          value: 7,
          label: 'Humor'
        },
        {
          value: 8,
          label: 'Dummy'
        },
        {
          value: 9,
          label: 'Health'
        },
        {
          value: 10,
          label: 'ForWomen'
        },
        {
          value: 11,
          label: 'Money'
        },
        {
          value: 12,
          label: 'Psychology'
        }
        ],
      topicObj:{'Art':1,'Books':2,'Comics':3,'Fiction':4,'Film':5,'Gaming':6,'Humor':7,'Dummy':8,'Health':9,'ForWomen':10,'Money':11,'Psychology':12},
      topics:[]
    }
  },
  mounted() {
    this.GET("/SuggestionsServlet").then((message)=>{
      let jsonObj=JSON.parse(message);

      jsonObj.DATA.forEach((element,index)=>{
        console.log(element)
        if(index===0){
          this.top1=element;
        }
        else{
          this.top4.push(element);
        }
      });

      let array=[];
      jsonObj.TOPICS.split(",").forEach((element)=>{
        console.log(this.topicObj[element]);
         array.push(this.topicObj[element]);
      });
      this.topics=array;

    });

    this.GET("/CreatorServlet").then((message)=>{
      let jsonObj=JSON.parse(message);
      jsonObj.DATA.forEach((element,index)=>{
        this.bloggersToFollow.push(element);
      });

    });

    this.GET("/index").then((message)=>{
      let jsonObj=JSON.parse(message);
      jsonObj.DATA.forEach((element,index)=>{
        this.popularBlogs.push(element);
      });
    });
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
}
  }
}
</script>
<style scoped>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .blog{
    height: 50px;
    width: 100%;
    display: flex;
    font-family: sans-serif;
  }
  .blog-number{
    height: inherit;
    width: 50px;
    display: flex;
    align-items: center;
    font-size: 25px;

  }
  .blog-title{
    height: inherit;
    width: calc(100% - 300px);
    display: flex;
    align-items: center;
    font-size: 25px;
    white-space: nowrap;
  }
  .blog-createdby{
    height: inherit;
    width: 190px;
    display: flex;
    align-items: center;
    font-size: 25px;
    white-space: nowrap;
    color: gray;
  }
  .blog-clickhere{
    height: inherit;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: blue;
    border: 1px dotted blue;
  }

  #topic-container{
    display: flex;
    padding-bottom: 40px;
  }

  #top-1{
    width: 375px;
    height: 500px;
    padding-right: 16px;
    padding-left: 16px;
  }

  #tops-4{
    width: 375px;
    height: 500px;
    padding-right: 16px;
    padding-left: 16px;
    overflow: scroll;
  }

  #topics{
    width: 375px;
    height: 500px;
    padding-right: 16px;
    padding-left: 16px;
  }

  #firstline{
    font-size: 16px;
    color: #191919;
  }

  #metadata{
    margin-top: 16px;
    display: flex;
    font-size: 13px;
    color: #757575;
  }

  .tops-4-container{
    height: 100px;
    width: 100%;
    padding-bottom: 33px;
    display: flex;
  }

  .top4-container-text{
    width: calc(100% - 120px);
    margin-right: 20px;
    height: inherit;
  }

  .top4-container-image{
    width: 100px;
    height: inherit;
  }

  .top-4-creator{
    height: 21px;
    width: 100%;
    margin-bottom: 8px;
    display: flex;
  }

  .top-4-title{
   min-height: 30px;
    font-size: 16px;
    font-weight: 700;
  }

  .top-4-metadata{
    height: 21px;
    width: 100%;
    margin-top: 8px;
    display: flex;
    font-size: 13px;
    color: #757575;
    justify-content: space-between;
  }

  .meta-start{
    display: flex;
    align-items: center;
  }

  .meta-end{
    display: flex;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
  }

  #inner-container{
    padding-left: 32px;
    border-left: 1px solid rgba(230, 230, 230, 1);
    width: calc(100% - 33px);
    height: inherit;
  }

  #bloggers-to-follow{
    height: 260px;
    width: 100%;
  }

  #bloggers-to-follow-title{
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
  }

  #profile-container{
    padding-top: 16px;
    height: calc(100% - 31px);
    width: 100%;
    overflow: scroll;
  }

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

  #topics-to-follow{
    margin-top: 32px;
  }

  #topics-title{
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  #topics-select{
    width: 100%;
  }

  #popular-blogs-container{
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    padding-top: 56px;
    border-top: 1px solid rgba(230, 230, 230, 1);
  }

  #popular-blogs{
    width: 700px;
    height: max-content;
  }

  #rightside-container{
    width: 400px;
    height: 450px;
  }

  #readlater{
    font-size: 16px;
    font-weight: 600;
    color: rgba(41, 41, 41, 1);
    display: flex;align-items: center;
    margin-right: 10px;
  }

  .popular-blog{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 58px;
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

</style>



