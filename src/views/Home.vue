<template>
  <div>
    <h4>Home</h4>
    <p>height:{{ height }}px</p>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: function() {
    return {
      height: this.$store.state.app.screenHeight
    }
  }
}
</script>
