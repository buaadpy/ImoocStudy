<template>
  <section id="control">
    <button type="button" @click="start" :disabled="flag" :class="{disable:flag}">开始随机</button>
    <button type="button" @click="stop" :disabled="!flag" :class="{disable:!flag}">就是你了</button>
  </section>
</template>
    
<script>
export default {
  data: function() {
    return {
      flag: false
    };
  },
  methods: {
    start: function() {
      this.flag = !this.flag;
      this.$emit("start");
    },
    stop: function() {
      this.flag = !this.flag;
      this.$emit("stop");
    }
  }
};
</script>

<style scoped>
#control {
  margin: 10px 0 180px 0;
  text-align: center;
}
button {
  margin: 0 30px;
  border: #ffffff solid 1px;
  border-radius: 5px;
  padding: 8px 14px;

  color: #ffffff;

  background: none;
  cursor: pointer;
  outline: none;
}
.disable {
  border-color: #777777;
  color: #777777;
  cursor: default;
}
</style>