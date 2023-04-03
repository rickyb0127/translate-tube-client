<template>
  <div class="tags-row-container">
    <div class="chips-container">
      <div class="chip" v-for="tag, index in tags" :key="index">
        {{ tag }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TagsRow',
  data() {
    return {
      tags: ["food", "kpop", "computer programming"]
    }
  }
}
</script>

<style scoped>
.tags-row-container {
  background-color: rgb(19, 19, 19);
  color: white;
  height: 56px;
  width: 100%;
}

.chips-container {
  display: flex;
  justify-content: center;
}

.chip {
  display: flex;
  margin-right: 20px;
  padding: 10px;
  border: 1px solid transparent;
  background-color: rgb(34, 34, 34);
  border-radius: 10px;
}
</style>
