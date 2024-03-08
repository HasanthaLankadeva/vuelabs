<template>
  <div>
    <h1>Home Page</h1>
    <v-btn @click="next()">next</v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    next() {
      this.$router.push("/NewPage");
    },
  },
}
</script>
