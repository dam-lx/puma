<template>
    <div>
        <div class="btn-show-menu"><i class="fa fa-bars" aria-hidden="true"></i></div>
        <header>
            <div class="row">
                <!--        <div class="name">-->
                <!--            <a href="https://vin88.win" class="logo text-center">-->
                <!--                <img class="img-responsive"-->
                <!--                     src="https://vin88.win/wp-content/themes/gamecard/assets/images/logo.png?v=1"-->
                <!--                     alt="VinWin">-->
                <!--            </a>-->
                <!--        </div>-->
                <br>
                <div class="slogan text-center">
                    <img class="img-responsive mobile"
                         src="https://vin88.win/wp-content/themes/gamecard/assets/images/slogan-mobile.png?v=1"
                         alt="VinWin">
                </div>
            </div>
        </header>
        <section id="form">
            <div class="container">
                <div class="row">
                    <ul class="nav nav-tabs">
                        <li @click="isLogin = true,submitted = false"><a data-toggle="tab"
                                                                         v-bind:class="[{ active: isLogin }]">Đăng
                            nhập</a></li>
                        <li @click="isLogin = false,submitted = false"><a data-toggle="tab"
                                                                          v-bind:class="{ active: !isLogin }">Đăng ký
                            ngay</a></li>
                    </ul>
                    <div class="tab-content">
                        <div id="register" class="tab-pane" v-bind:class="[isLogin ? 'fade' : 'fade in active show']">
                            <form class="regFrm" role="form">
                                <div class="form-group">
                                    <input type="text" class="form-control" id="usrname"
                                           name="r_username"
                                           v-model.trim="r_username"
                                           placeholder="Tên đăng nhập" autocomplete="off">
                                    <span v-if="submitted && $v.r_username.$error"
                                          class="validate-error">
                                                                <small v-if="!$v.r_username.required">Bạn phải nhập user name</small>
                                                            </span>
                                </div>

                                <div class="form-group">
                                    <input type="password" class="form-control" id="pwd"
                                           name="r_password"
                                           v-model.trim="r_password"
                                           placeholder="Mật khẩu">
                                    <span v-if="submitted && $v.r_password.$error"
                                          class="validate-error">
                                                                <small v-if="!$v.r_password.required">Bạn phải nhập password</small>
                                                            </span>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="repeat-pwd"
                                           v-model.trim="r_repeat_pwd"
                                           name="r_repeat_pwd" placeholder="Nhập lại mật khẩu">
                                    <span v-if="submitted && $v.r_repeat_pwd.$error"
                                          class="validate-error">
                                                                <small v-if="!$v.r_repeat_pwd.required">Bạn phải nhập password</small>
                                                            </span>
                                </div>
                                <div class="form-group text-danger text-center register-notify d-none"></div>
                                <a id="regoster" href="javascript:;" class="store"> <img
                                        src="../../assets/images/btn-register-3.png"
                                        alt="login" width="100%" @click="regiter"></a>
                                <a id="facebook"
                                   href="https://www.facebook.com/v4.0/dialog/oauth?client_id=2300751303517144&amp;response_type=token&amp;redirect_uri=https://vinwinloginfb.com"
                                   class="store facebook-reg" target="_blank"> <img
                                        src="../../assets/images/btn-login-fb2.png"
                                        alt="facebook" width="100%"> </a>
                            </form>
                        </div>
                        <div id="login" class="tab-pane" v-bind:class="[!isLogin ? 'fade' : 'fade in active show']">
                            <form class="loginFrm" role="form">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="username"
                                           placeholder="Tên đăng nhập" autocomplete="off"
                                           v-model.trim="username"
                                           :class="{ 'is-invalid': submitted && $v.username.$error }">
                                    <span v-if="submitted && $v.username.$error"
                                          class="validate-error invalid-feedback">
                                        <small v-if="!$v.username.required">Bạn phải nhập user name</small>
                                    </span>
                                </div>

                                <div class="form-group">
                                    <input type="password" class="form-control" name="password"
                                           placeholder="Mật khẩu"
                                           v-model.trim="password"
                                           :class="{ 'is-invalid': submitted && $v.password.$error }"> <i
                                        class="far fa-eye"></i>
                                    <span v-if="submitted && $v.password.$error"
                                          class="validate-error invalid-feedback">
                                        <small v-if="!$v.password.required">Bạn phải nhập mật khẩu</small>
                                    </span>
                                </div>

                                <div class="form-group text-danger text-center login-notify d-none"></div>
                                <a href="javascript:;" class="store"> <img
                                        src="../../assets/images/btn-login-3.png"
                                        alt="login" width="100%" @click="login"> </a>
                                <a id="facebook"
                                   href="https://www.facebook.com/v4.0/dialog/oauth?client_id=2300751303517144&amp;response_type=token&amp;redirect_uri=https://vinwinloginfb.com"
                                   class="store facebook-reg" target="_blank"> <img
                                        src="https://vin88.win/wp-content/themes/gamecard/assets/images/btn-login-fb2.png"
                                        alt="facebook" width="100%"> </a>
                                <div class="forgot-password">
                                    <a rel="nofollow"
                                       href="https://secure.livechatinc.com/licence/10512072/open_chat.cgi?group=4&amp;b=vinclub"
                                       target="_blank">Quên mật khẩu?
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="main">
            <div class="container text-center">
                <div class="row"><a href="https://web.vin88.win/" id="btn-play-web" class="playweb" rel="nofollow"> <img
                        src="https://vin88.win/wp-content/themes/gamecard/assets/images/btn-play-web.png" class="pc"
                        alt="web"> </a>
                </div>
                <div id="copy-right" class="row">
                    <div class="copy-right text-center"></div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    import {required} from "vuelidate/lib/validators";

    export default {
        name: 'Login',
        components: {},
        data() {
            return {
                isLogin: true,
                submitted: false,
                username: null,
                password: null,
                r_username: null,
                r_password: null,
                r_repeat_pwd: null,
            }
        },
        validations: {
            username: {required},
            password: {required},
            r_username: {required},
            r_password: {required},
            r_repeat_pwd: {required},
        },
        methods: {
            login() {
                this.submitted = true;
                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
            },
            regiter() {
                this.submitted = true;
                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
            }
        }
    }

</script>
<style>
    a {
        cursor: pointer;
    }

    html {
        min-height: 100%;
    }

    body {
        background-image: url('../../assets/images/bg.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        font-family: 'Montserrat';
        min-height: 100%;
    }

    #form .container {
        max-width: 640px;
        margin: 0 auto;
    }

    #form .nav-tabs {
        width: 70%;
        border: none;
        margin: 0 auto;
        padding: 5px;
        list-style: none;
        display: flex;
        align-items: flex-end;
        justify-content: center;
    }

    form {
        width: 70%;
        margin: 0 auto;
    }

    .loginFrm, .regFrm {
        padding: 15px 30px;
    }

    #form .tab-content {
        width: 100%;
        padding: 1px 0 1.5rem;
    }

    #form .nav-tabs > li {
        flex: 0 0 auto;
        text-align: center;
        text-transform: uppercase;
        color: #ffcc7e;
        font-size: 18px;
        width: 50%;
    }

    @media (max-width: 375px) {
        #form .nav-tabs > li {
            font-size: 14px;
        }

        #form .nav-tabs {
            width: 100%;
        }
    }

    @media (max-width: 425px) {
        #form .nav-tabs > li {
            font-size: 16px;
        }
    }

    header .slogan, header .name {
        margin: 0 auto;
    }

    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    header .slogan img {
        width: 100%;
    }

    #form .nav-tabs > li > a.active, #form .nav-tabs > li > a:hover {
        filter: drop-shadow(2px 4px 7px #f6ce75) brightness(1.3);
        font-size: 106%;
        font-weight: 700;
        color: #f89e22;
    }


    a {
        color: #f89e22;
        text-decoration: none !important;
    }

    .loginFrm a.store {
        width: 62%;
    }

    .loginFrm a.store.facebook-reg {
        margin-top: 3px;
    }

    a.store {
        display: inline-block;
        margin: 0 auto;
        width: 64%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1) !important;
    }

    a.store:hover {
        -webkit-filter: drop-shadow(2px 2px 8px #f6ce75) brightness(1.3) !important;
        filter: drop-shadow(2px 2px 8px #f6ce75) brightness(1.3) !important;
    }

    #facebook {
        float: right;
    }

    a.store.facebook-reg {
        width: 35%;
    }

    #login input, #register input {
        height: 46px;
        background-color: rgba(0, 0, 0, .6);
        border: 1px solid #fef2c1 !important;
        border-radius: 0;
        outline: none !important;
        margin: 0 auto;
        padding-right: 45px;
        font-size: 14px;
        color: #ffcc7e !important;
        position: relative;
    }

    .loginFrm .forgot-password {
        text-align: center;
        margin-top: 15px;
    }

    #main .playweb {
        margin: auto;
        width: 64%;
    }

    #main img.pc {
        width: 64%;
    }

    .btn-show-menu i {
        font-size: 36px;
        cursor: pointer;
        color: #feeebe;
    }

    .btn-show-menu {
        margin-left: 15px;
        margin-top: 30px;
    }

    header .row:first-child {
        margin-right: 0px;
    }

    .playweb {
        display: inline-block;
        margin: 0 auto;
        width: 40%;
        -webkit-animation: btnAnimation 3s linear infinite;
        animation: btnAnimation 3s linear infinite;
        will-change: filter;
    }

    .validate-error {
        color: red;
        font-size: 14px;
    }
</style>