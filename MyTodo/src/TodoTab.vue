<template>
  <div id="todoTab">
    <span>{{todoLeftCount}} items left</span>
    <div @click="changeState">
      <span v-for="state in states" :key="state" :class="state == stateActive? 'states active':'states'" :id="state">{{state}}</span>
    </div>
    <span class="clear" @click="clearCompleted">Clear Completed</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      states: ["all", "active", "completed"]
    };
  },
  props: {
    todoLeftCount: {
      type: Number,
      required: true
    },
    stateActive:{
        type:String,
        required:true
    }
  },
  methods: {
    clearCompleted: function() {
      this.$emit("clear");
    },
    changeState: function(e) {
      if (this.states.indexOf(e.target.innerText) != -1) {
        this.$emit("changeState", e.target.innerText);
      }
    }
  }
};
</script>

<style scoped>
#todoTab {
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 40px;
  border: none;

  line-height: 40px;
  font-size: 14px;

  background-color: #ffffff;
}

.states {
  margin: 0 10px;
  padding:7px;

  cursor: pointer;
}

.active {
    padding:5px;
    border:#993333 solid 2px;
    border-radius:5px;
}

.clear {
  cursor: pointer;
}
</style>