<template>
  <div class="video-container">
    <video id="video-player" controls muted @playing="playDubbedAudio" @pause="pauseDubbedAudio">
      <source :src="videoUrl" type="video/mp4" />
      <audio id="dubbed-audio" controls>
        <source src="https://s3.us-west-2.amazonaws.com/translate-tube/236b6570-ce42-4686-ab1a-1242ddd25a94.mp3" type="audio/mp3"/>
      </audio>
    </video>
  </div>
</template>

<script>
export default {
  name: 'WatchVideo',
  data() {
    return {
      videoUrl: process.env.VUE_APP_ENV === 'local' ? 'api/video' : 'https://translate-tube-api-js-production.up.railway.app/api/video'
    }
  },
  methods: {
    playDubbedAudio() {
      const dubbedAudio = document.getElementById("dubbed-audio");
      dubbedAudio.play();
    },
    pauseDubbedAudio() {
      const dubbedAudio = document.getElementById("dubbed-audio");
      dubbedAudio.pause();
    }
  }
}
</script>

<style scoped>
.video-container {
  height: 480px;
  width: 100%;
}

#video-player {
  width: 100%;
}
</style>