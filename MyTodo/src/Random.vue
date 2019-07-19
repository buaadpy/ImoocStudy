<template>
  <section id="random">
    <p :class="{active:isActive}">{{something}}</p>
    <RandomButton @start="randomStart" @stop="randomStop"></RandomButton>
  </section>
</template>
    
<script>
import RandomButton from "./RandomButton.vue";

export default {
  data: function() {
    return {
      something: "点击随机按钮开始",
      list: [
        "打一把手机游戏",
        "看一篇技术博客",
        "做一道leetcode题",
        "静下来冥想十分钟",
        "看一部安静的电影",
        "阅读半小时书籍",
        "做一百个俯卧撑"
      ],
      clockId: 0,
      isActive: false
    };
  },
  methods: {
    randomStart: function() {
      this.isActive = false;
      var _this = this;
      this.clockId = setInterval(function() {
        _this.something = _this.list[Math.floor(Math.random() * 7)];
      }, 80);
    },
    randomStop: function() {
      this.isActive = true;
      clearInterval(this.clockId);
      const value = this.something;
      this.$store.commit("add", {
        itemText: value,
        itemId: 0,
        completed: false
      });
    }
  },
  components: {
    RandomButton
  }
};
</script>

<style scoped>
#random {
  text-align: center;
}
p {
  margin: 100px 0;
  color: #ffffff;
  font-size: 50px;
  font-weight: bold;
}
.active {
  color: #209975;
  font-size: 60px;
}
</style>

