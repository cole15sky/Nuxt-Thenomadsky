<template>
    <div class="p-6 max-w-screen-lg mx-auto">
      <h1 class="text-4xl font-bold mb-4">{{ article.title }}</h1>
      <img :src="article.image" alt="Article image" class="w-full h-auto mb-6">
      <div class="text-gray-700">
        <p>{{ article.content }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    article: {
      type: Object,
      required: true,
    },
  });
  </script>
  
 