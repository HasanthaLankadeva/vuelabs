<template>
  <div>
    <h1>NewPage</h1>
    <v-btn @click="next()">next</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push("/NewPageNext");
    },
  },
};
</script>
