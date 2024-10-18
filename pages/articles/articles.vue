<template>
  <main class="pt-8 pb-16 lg:pt-16 mt-14 lg:pb-24 bg-blue-100 dark:bg-blue-100 antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue yellow:format-invert">
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-blue-600">
              <img class="mr-4 w-16 h-16 rounded-full" src="/Assets/Images/sunsethome.jpeg" alt="sky pic">
              <div>
                <a href="#" rel="author" class="text-xl font-bold">Aakash Dawadi</a>
                <p class="text-base text-gray-700">Developer</p>
                <p class="text-base text-gray-900">
                  <time datetime="2022-02-08" title="February 8th, 2022">Feb. 24, 2019</time>
                </p>
              </div>
            </div>
          </address>
        </header>
      </article>
    </div>
    <div class="container mx-autaao p-6">
      <h1 class="text-2xl font-bold mb-4">Article List</h1>
      <table class="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border px-4 py-2">SN</th>
            <th class="border px-4 py-2">Title</th>
            <th class="border px-4 py-2">Date of Publish</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" :key="article.id" class="hover:bg-gray-50">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">
              <!-- Update this line -->
              <NuxtLink :to="`/articles/${article.id}`">{{ article.title }}</NuxtLink>
            </td>
            <td class="border px-4 py-2">{{ article.publishDate }}</td>
          </tr>
        </tbody>
      </table>
   

    </div>
  </main>
</template>

<script setup>
const articles = ref([
  { id: 1, title: 'Pink Hopes', publishDate: '2023-10-10' },
  { id: 2, title: 'Saturday 24 2019', publishDate: '2019-02-12' },
  { id: 3, title: 'Flying big.', publishDate: '2023-10-15' }
]);
</script>

<style scoped>
</style>
