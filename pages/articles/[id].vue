<template>
  <main class="pt-8 pb-16 lg:pt-16 mt-14 lg:pb-24 bg-blue-100 min-h-screen dark:bg-blue-100 antialiased">
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <p class="text-gray-700 mb-4">Published on: <time :datetime="article.publishDate">{{ article.publishDate }}</time></p>
      <p class="text-base text-gray-800">{{ article.content }}</p>
    </div>
  </main>
</template>

<script setup>

const articlesData = [
  { id: 1, title: 'Pink Hopes', publishDate: '2023-10-10', content: 'Content for Pink Hopes article.' },
  { id: 2, title: 'Saturday 24 2019', publishDate: '2019-02-12', content: 'Content for Saturday 24 article.' },
  { id: 3, title: 'Flying big.', publishDate: '2023-10-15', content: 'Content for Flying big article.' }
];

const article = ref({});
const route = useRoute();

onMounted(() => {
  const articleId = parseInt(route.params.id);
  article.value = articlesData.find(a => a.id === articleId);
});
</script>

<style scoped>
/* Add any styles you want here */
</style>
