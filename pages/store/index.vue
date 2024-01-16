<template>
  <div class="page">
    <h1>store</h1>
    {{ data }}
    {{ error }}
  </div>
</template>

<script setup>

const { data, error } = await useAsyncData(()=> {
  return $fetch('/api/test', {
    method: 'get',
  })
})
</script>