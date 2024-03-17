<template>
  <div></div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("the component is creating...");
  },
  created() {
    console.log("the component is created...");
  },
  beforeMount() {
    console.log("the component is loding...");
  },
  mounted() {
    console.log("the component is loded...");
  },
  beforeUpdate() {
    console.log("the component is updating...");
  },
  updated() {
    console.log("the component is updated...");
  },
};
</script>
