<template>
  <div class="example">
    {{t('greeting')}}
  </div>
</template>
<script>
export default {
  name: 'header-after',
  props: ['t']
}
</script>
<style scoped>
.example {
  margin-top: -30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


