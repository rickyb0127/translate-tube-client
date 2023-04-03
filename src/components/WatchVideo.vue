<template>
  <div class="video-container">
    <video class="video-player" autoplay controls :src="videoUrl"></video>
  </div>
</template>

<script>
export default {
  name: 'WatchVideo',
  data() {
    return {
      videoUrl: process.env.VUE_APP_ENV === 'local' ? 'api/video' : 'https://translate-tube-api-js-production.up.railway.app/api/video'
    }
  }
}
</script>

<style scoped>
.video-container {
  height: 480px;
  width: 100%;
}

.video-player {
  width: 100%;
}
</style>