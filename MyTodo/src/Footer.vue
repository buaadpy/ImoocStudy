<template>
  <div id="author">Copyright &copy; {{author}} {{year}}</div>
</template>

<script>
export default {
  data: function() {
    return {
      author: "dpy",
      year:2019,
    };
  }
};
</script>

<style>
#author {
  margin-top:50px;
  width: 100%;
  height: 50px;

  line-height:50px;
  text-align: center;
  color: #888888;
  font-size: 16px;
}
</style>