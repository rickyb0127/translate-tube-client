<template>
  <div class="navbar" id="navbar">
    <div class="start">
      <div class="menu">
        <i class="icon fa-solid fa-bars"></i>
      </div>
      <div class="logo-container">
        <img class="logo" src="../assets/youtube-logo-dark.png" />
      </div>
    </div>
    <div class="middle">
      <div class="search-container">
        <form id="search-form">
          <div class="search-box">
            <input placeholder="Search" class="search-input" />
          </div>
        </form>
        <button class="search-btn">
          <i class="icon fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
    <div class="end">
      <div class="icons">
        <div class="skeleton"></div>
        <i class="icon fa-solid fa-video menu-item-spacing"></i>
        <i class="icon fa-regular fa-bell menu-item-spacing"></i>
        <i class="icon fa-solid fa-user-ninja"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  height: 56px;
  width: 100%;
  padding: 0 30px;
  background-color: rgb(19, 19, 19);
  display: flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 1000;
  position: sticky;
}

.start {
  display: flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.middle {
  display: flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 728px;
  min-width: 0px;
}

.search-container {
  display: flexbox;
  display: flex;
  margin: 0 0 0 40px;
  padding: 0 4px;
  flex: 1;
  flex-basis: 1e-9px;
}

.search-btn {
  border: 1px solid gray;
  background-color: rgb(34, 34, 34);
  border-radius: 0 40px 40px 0;
  cursor: pointer;
  height: 40px;
  width: 64px;
  margin: 0;
}

#search-form {
  height: 40px;
  position: relative;
  flex: 1;
  flex-basis: 1e-9px;
  display: flexbox;
  display: flex;
  flex-direction: row;
}

.search-input {
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: inherit;
  font-family: Roboto,Noto,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 4px;
  max-width: 100%;
  outline: none;
  text-align: inherit;
  width: 100%;
  -ms-flex: 1 1 0.000000001px;
  -webkit-flex: 1;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  flex: 1;
  -webkit-flex-basis: 1e-9px;
  -ms-flex-preferred-size: 0.000000001px;
  flex-basis: 1e-9px;
}

.search-box {
  position: relative;
  align-items: center;
  background-color: rgb(19, 19, 19);
  border: 1px solid gray;
  border-right: none;
  border-radius: 40px 0 0 40px;
  box-shadow: inset 0 1px 2px gray;
  caret-color: gray;
  color: white;
  padding: 0px 4px 0px 16px;
  margin-left: 32px;
  flex: 1;
  flex-basis: 1e-9px;
  display: flexbox;
  display: flex;
  flex-direction: row;
}

.end {
  display: flexbox;
  display: flex;
  min-width: 225px;
  align-items: center;
  justify-content: center;
}

.icons {
  display: flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar .icon {
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.logo-container {
  padding-left: 20px;
}

.navbar .logo {
  height: 45px;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.navbar .menu-items {
  padding-left: 50px;
  cursor: pointer;
}
.menu-item-spacing {
  padding-right: 20px;
}
</style>