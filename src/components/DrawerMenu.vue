<template>
  <div class="drawer-menu-container">
    <div class="actions-column main-actions">
      <div class="menu-item">
        <i class="fa-solid fa-house"></i>
        <span class="title">Home</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-film"></i>
        <span class="title">Shorts</span>
      </div>
      <div class="menu-item">
        <i class="fa-regular fa-hard-drive"></i>
        <span class="title">Subsciptions</span>
      </div>
      <div class="menu-item">
        <i class="fa-brands fa-youtube"></i>
        <span class="title">Originals</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-compact-disc"></i>
        <span class="title">YouTube Music</span>
      </div>
    </div>
    <div class="actions-column user-actions">
      <div class="menu-item">
        <i class="fa-solid fa-circle-play"></i>
        <span class="title">Library</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <span class="title">History</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-play"></i>
        <span class="title">Your Videos</span>
      </div>
      <div class="menu-item">
        <i class="fa-regular fa-clock"></i>
        <span class="title">Watch Later</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-download"></i>
        <span class="title">Downloads</span>
      </div>
    </div>
    <div class="actions-column subscriptions">
      <div class="category-title">Subscriptions</div>
    </div>
    <div class="actions-column explore">
      <div class="category-title">Explore</div>
      <div class="menu-item">
        <i class="fa-solid fa-fire-flame-curved"></i>
        <span class="title">Trending</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-bag-shopping"></i>
        <span class="title">Shopping</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-music"></i>
        <span class="title">Music</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-clapperboard"></i>
        <span class="title">Movies & TV</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-tower-broadcast"></i>
        <span class="title">Live</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-gamepad"></i>
        <span class="title">Gaming</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-newspaper"></i>
        <span class="title">News</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-trophy"></i>
        <span class="title">Sports</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-lightbulb"></i>
        <span class="title">Learning</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-shirt"></i>
        <span class="title">Fashion & Beauty</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-podcast"></i>
        <span class="title">Podcasts</span>
      </div>
    </div>
    <div class="settings">
      <div class="menu-item">
        <i class="fa-solid fa-gear"></i>
        <span class="title">Settings</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-flag"></i>
        <span class="title">Report History</span>
      </div>
      <div class="menu-item">
        <i class="fa-regular fa-circle-question"></i>
        <span class="title">Help</span>
      </div>
      <div class="menu-item">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span class="title">Send Feedback</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerMenu',
  props: {
    isCollapsed: Boolean
  }
}
</script>

<style scoped>
.drawer-menu-container {
  color: white;
  display: flex;
  width: 216px;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
}

.actions-column {
  display: flex;
  flex-direction: column;
}

.main-actions, .user-actions, .subscriptions, .explore, .settings {
  border-bottom: 1px solid rgb(34, 34, 34);
}

.menu-item, .category-title {
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.menu-item {
  cursor: pointer;
}

.menu-item i {
  width: 20px;
}

.title {
  padding-left: 30px;
}

.collapsed {
  width: 72px;
}
</style>
