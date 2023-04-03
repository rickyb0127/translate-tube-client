<template>
  <div class="preview-container">
    <div class="video-container" v-for="video, index in videos" :key="index">
      <div class="thumbnail-container" @click="goToWatchVideo">
        <img class="video-thumbnail" src="api/thumbnail" />
      </div>
      <div class="detail">
        {{ video.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewRows',
  data() {
    return {
      videos: null
    }
  },
  methods: {
    async fetchAllVideos() {
      try {
        const response = await fetch(`http://localhost:8000/api/videos`);
        
        const responseJson = await response.json();
        return responseJson.data;
      } catch(err) {
        console.log(err);
      }
    },
    goToWatchVideo() {
      this.$router.push({
        name: 'WatchVideo',
        // params: {
        //   showBackButton: true,
        //   successCb: this.onboardSuccessCallback
        // }
      });
    }
  },
  async created() {
    this.videos = await this.fetchAllVideos();
    console.log(this.videos[0].thumbnail)
  }
}
</script>

<style scoped>
.preview-container {
  color: white;
  display: flex;
  padding: 30px;
}

.video-container {
  width: 384px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
}

.thumbnail-container {
  width: 360px;
  height: 200px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.video-thumbnail {
  width: 100%;
}

.detail {
  display: flex;
  height: 100px;
  margin: 12px;
}
</style>
