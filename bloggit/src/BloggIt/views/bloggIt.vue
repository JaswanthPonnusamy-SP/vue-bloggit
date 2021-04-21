<template>
  <div class="signin">
    <div class="signin-container">
      <section class="inner-container">
        <section id="signin-image">
          <img src="../../Homepage/images/homepage-image-1.png" class="signin-image-1" ondragstart="return false"> <!--ondragstart="return false"-->
        </section>

        <section id="signin-form-container">
          <div id="signin-form-container-heading-container">
            <div id="signin-form-container-heading-text">Sign in</div>
            <div class="line">
            </div>
          </div>

          <div style="margin-top: 40px;position: relative">
              <input type="text" class="input" name="username" id="username" placeholder=" " ref="hu" autocomplete="off">
            <label for="username">Username</label>
            </div>
            <div style="margin-top: 30px;position: relative" v-if="password">
          <input  :type="showPassword ? 'text' : 'password'" class="input" ref="password" autocomplete="current-password" placeholder=" " id="pass">
              <label for="pass">Password</label>
              <el-tooltip open-delay="300" v-if="showPassword" content="Hide Password" placement="bottom" effect="dark"> <i class="far fa-eye-slash field-icon" @click="changePasswordFieldType('password')"> </i></el-tooltip>
              <el-tooltip open-delay="300" v-else content="Show Password" placement="bottom" effect="dark"><i class="far fa-eye field-icon" @click="changePasswordFieldType('password')"> </i></el-tooltip>
            </div>
          <div class="button-class2">
            <button class="signin-button">Sign In</button>
          </div>

          <div class="singin-bottom">Don’t have an account ? <a style="color: #1968FC;cursor: pointer;text-decoration: none;" href="/signup.html">Sign Up</a></div>
        </section>

      </section>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'SignIn',
    components: {},
    data(){
      return{
        showPassword:false,
        password :true
      }
    },
    methods:{
      changePasswordFieldType(){
        let el;
        el = this.$refs.password;
        this.showPassword=!this.showPassword;
        setTimeout(() => el.focus(),el.setSelectionRange(el.value.length, el.value.length));
      }
    }
  }
</script>
<style scoped>

  .signin-container{
    width: 100%;
    height: 520px;
    margin-top: 135px;
  }

  .inner-container{
    width: 1115px;
    height: inherit;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
  }

  #signin-image{
    width: 56%;
    height: inherit;
    display: flex;
    justify-content: flex-start;
    float: left;
  }

  .signin-image-1{
    width: 520px;
    height: 450px;
  }

  #signin-form-container{
    width: 44%;
    height: 100%;
    float: right;
  }

  #signin-form-container-heading-container {
    width: 100%;
    height: 118px;
    background-color: #F3F7FF;
    overflow:auto
  }

  #signin-form-container-heading-text {
    margin-left: 5.1%;
    font-size: 30px;
    font-weight: 500;
    margin-top: 35px;
  }

  .line{
    background: #1968FC;
    box-shadow: 0 2px 0 0 #D1E1FE;
    width: 71px;
    height: 2px;
    margin-top: 10px;
    margin-left: 5.1%;
  }

  .input{
    background: #FFFFFF;
    /*box-shadow: 0 20px 60px 0 rgba(49,69,244,0.10);*/
    box-shadow: 0 5px 15px 0 rgba(49,69,244,0.10);
    height: 80px;
    width: 94%;
    border: 1px solid #DADCE0;
    font-size: 30px;
    padding-left: 25px;
    cursor: default;
  }

  .button-class2{
    width: 100%;
    height: 69px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .signin-button{
    border: none;
    font-weight: normal;
    width: 165px;
    height: inherit;
    background: #1968FC;
    box-shadow: 0 9px 6px 0 rgba(25,104,252,0.30);
    border-radius: 7.5px;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    outline: none;
    cursor: pointer;
  }

  ::-webkit-input-placeholder {
    opacity: 0.7;

  }

  :-moz-placeholder { /* Firefox 18- */
    opacity: 0.7;
  }

  ::-moz-placeholder { /* Firefox 19+ */
    opacity: 0.7;
  }

  :-ms-input-placeholder { /* IE 10+ */
    opacity: 0.7;
  }

  ::-ms-input-placeholder { /* Edge */
    opacity: 0.7;
  }

  :placeholder-shown { /* Standard one last! */
    opacity: 0.7;
  }

  .singin-bottom{
    margin-top: 40px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }

  @media screen and (max-width: 1180px) {
    .inner-container{
      width: 95%;
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1080px) {
    .inner-container{
      width: 100%;
      padding-left: 0;
      padding-right: 0;

    }

    #signin-image{
      /*position: absolute;*/
      /*width: 100%;*/
      /*justify-content: center;*/
      /*float: none;*/
      /*z-index: -5;*/
      /*opacity: 0.4;*/
      display: none;
    }

    #signin-form-container{
      width: 490px;
    }

  }

  .field-icon {
    position: absolute;
    margin-top: 28px;
    margin-left: -50px;
    font-size: 25px;
    color: #595959;
  }

  label{
    position: absolute;
    left: 25px;
    margin-top: 25px;
    font-size: 25px;
    color: #cdc8c8;
    font-weight: 500;
    transform-origin: 0 0;
    transition: transform 0.2s ease-in-out;
  }

/*  #password:focus + label, input:not(:placeholder-shown){*/
/*    transform: translateY(-40px);*/
/*  }*/

/*input::placeholder{*/
/*  color: transparent;*/
/*}*/

  input:placeholder-shown + label {
    /*cursor: text;*/
    /*max-width: 66.66%;*/
    /*white-space: nowrap;*/
    /*overflow: hidden;*/
    /*text-overflow: ellipsis;*/
    /*transform-origin: left bottom;*/
    /*transform: translate(0, 2.125rem) scale(1.5);*/
  }
  /**
  * By default, the placeholder should be transparent. Also, it should
  * inherit the transition.
  */
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
  /**
  * Show the placeholder when the input is focused.
  */
  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }
  /**
  * When the element is focused, remove the label transform.
  * Also, do this when the placeholder is _not_ shown, i.e. when
  * there's something in the input at all.
  */
  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, -38px) scale(0.7);
    cursor: pointer;
    background-color: white;
    color: #005FCC;
    padding-left: 3px;
    padding-right: 3px;
  }

  input:not(:focus) +label{
    color: #8b8888;
  }

</style>
