<template>
  <div class="video-container">
    <video class="video-player" autoplay controls src="api/video"></video>
  </div>
</template>

<script>
export default {
  name: 'WatchVideo'
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