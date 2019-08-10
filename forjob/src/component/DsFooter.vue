<template>
  <div class="footer">
    <p>
      <a href="#">慕课简介</a>
      <span>|</span>
      <a href="#">慕课公告</a>
      <span>|</span>
      <a href="#">招贤纳士</a>
      <span>|</span>
      <a href="#">联系我们</a>
      <span>|</span> 客服热线：400-675-1234
    </p>
    <p>Copyright &copy; 2006-2019 buaadpy版权所有&nbsp;&nbsp;&nbsp;京ICP备09037834号&nbsp;&nbsp;&nbsp;京ICP证B1034-8373号&nbsp;&nbsp;&nbsp;某市公安局XX分局备案编号：1234567</p>
    <p class="footer-logo">
      <a href="#">
        <img src="./../asset/image/webLogo.png" alt="logo" />
      </a>
      <a href="#">
        <img src="./../asset/image/webLogo.png" alt="logo" />
      </a>
      <a href="#">
        <img src="./../asset/image/webLogo.png" alt="logo" />
      </a>
      <a href="#">
        <img src="./../asset/image/webLogo.png" alt="logo" />
      </a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: #d4d4d4;
  line-height: 24px;
  padding: 50px 0px;
  font-size: 12px;
  margin-top: 40px;
}

span {
  margin: 0 5px;
}

a {
  color: black;
}

a:hover {
  color: #f60;
}

.footer-logo {
  padding-top: 30px;
}

.footer-logo img {
  margin: 0 12px;
}
</style>