<template>
  <div>
    {{ text }}
  </div>
</template>
<script>
const test = .1
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.text = "test";
    console.log(.1);
  },
};
</script>

<style></style>
