<template>
  <div class="main-content">
    <TagsRow />
    <PreviewRows />
  </div>
</template>

<script>
import TagsRow from './TagsRow.vue'
import PreviewRows from './PreviewRows.vue'

export default {
  name: 'HomeView',
  components: {
    TagsRow,
    PreviewRows
  }
}
</script>

<style scoped>
</style>