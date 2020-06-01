<template>
  <div>
    <h4>游戏列表</h4>
    <router-link :to="{ name: 'card'}">卡牌翻转</router-link>
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
