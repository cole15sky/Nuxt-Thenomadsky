<template>
  <div>
    <ArticlesHome />
  </div>
  <main class=" pb-16 lg:pt-16  lg:pb-24 bg-blue-100 dark:bg-blue-100 antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
      <article
        class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue yellow:format-invert">
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-blue-600">
              <img class="mr-4 w-16 h-16 rounded-full" src="/Images/sunsethome.jpeg" alt="sky pic">
              <div>
                <a href="#" rel="author" class="text-xl font-bold">Aakash Dawadi</a>
                <p class="text-base text-gray-700">adoresky___</p>
                <p class="text-base text-gray-900">
                  <time datetime="2022-02-08" title="February 8th, 2022">Feb. 24, 2019</time>
                </p>
              </div>
            </div>

          </address>
          <span class=" flex justify-center text-xl text-gray-800  mb-4"> "I enjoy weaving my words through the realms of fantasy,
            love, and science."</span>

        </header>
      </article>
    </div>
    <div class="container mx-auto shadow-md">

      <h1 class=" text-black flex justify-center text-2xl font-bold  ">Article Content :</h1>


      <table class="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr class="bg-gray-300 shadow-lg text-blue-500">
            <th class=" border px-4 py-2">SN</th>
            <th class="border px-4 py-2">Title</th>
            <th class="border px-4 py-2 ">Date of written</th>
            <th class="border px-4 py-2">Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" :key="article.id" class="hover:bg-gray-50">
            <td class="border px-4 text-gray-900 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2 text-blue-500 hover:underline cursor-pointer">
              <!-- Update this line -->
              <NuxtLink :to="`/articles/${article.id}`">{{ article.title }}</NuxtLink>
            </td>
            <td class="border px-4 py-2 text-gray-900">{{ article.written }}</td>
            <td class="border px-4 py-2 text-gray-900">{{ article.Genre }}</td>

          </tr>
        </tbody>
      </table>


    </div>
  </main>
  <div>

  </div>
</template>

<script setup>
const articles = ref([
  { id: 1, title: 'Server-Nuxt', written: '2024-11-08', Genre: 'Tech.Science' },
  { id: 2, title: 'A single chance.', written: '2019-02-12', Genre: 'Philosophy' },
  { id: 3, title: 'Choice', written: '2023-10-15', Genre: 'Reality' },
  { id: 4, title: 'A wave of fun', written: '2022-04-21', Genre: 'Fantasy' },
  { id: 5, title: 'Genious is knowing when to stop ?', written: '2022-06-02', Genre: 'Fantasy' }
]);
</script>
