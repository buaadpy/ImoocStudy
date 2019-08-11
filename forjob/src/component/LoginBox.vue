<template>
  <div class="regBox">
    <ul class="reg">
      <li class="l-tit">邮箱/用户名/手机号</li>
      <li>
        <input type="text" class="login-input" />
      </li>
      <li class="l-tit">密码</li>
      <li>
        <input type="password" class="login-input" />
      </li>
      <li>
        <input type="button" class="login-btn" value="登录" />
      </li>
    </ul>
    <div class="friend">
      <div>使用合作方账号登录网站:</div>
      <ul>
        <li>
          <a href="#">QQ</a>
        </li>
        <li>
          <span>|</span>
          <a href="#">网易</a>
        </li>
        <li>
          <span>|</span>
          <a href="#">人人</a>
        </li>
        <li>
          <span>|</span>
          <a href="#">豆瓣</a>
        </li>
        <li>
          <span>|</span>
          <a href="#">微博</a>
        </li>
      </ul>
    </div>
    <!--<a href="#" class="reg-link">免费注册</a>-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.regBox {
  width: 308px;
  height: 270px;
  border: #999999 solid 1px;
  margin: 20px auto;
  padding: 15px 76px;
  position: relative;
}

.l-tit {
  color: #666666;
  line-height: 20px;
}

.login-input {
  border: #999 solid 1px;
  height: 32px;
  line-height: 32px;
  text-indent: 20px;
  width: 100%;
  background: url("./../asset/icon/user.jpg") 95% center no-repeat;
  margin-bottom: 10px;
}

.checked {
  position: relative;
  top: 3px;
  margin-right: 3px;
}

.login-btn {
  margin:20px 0;
  width: 309px;
  height: 36px;
  background: url("./../asset/img/button.jpg") center center;
  cursor: pointer;
}

.friend {
  padding-top: 34px;
  color: #666666;
  line-height: 20px;
}

.friend div{
  float:left;
  width:140px;
}

.friend ul {
  float:left;
}

.friend li {
  float: left;
  line-height: 20px;
}

.friend span {
  margin: 0 3px;
  color: #999;
}

.reg-link {
  display: inline-block;
  height: 35px;
  width: 120px;
  background-color: #33cc33;
  text-align: center;
  line-height: 35px;
  color: #ffffff;
  position: absolute;
  right: 40px;
  bottom: -36px;
}
</style>