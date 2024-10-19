<template>
  <main class="pt-8 pb-16 lg:pt-16 mt-14 lg:pb-24 bg-blue-100 min-h-screen dark:bg-blue-100 antialiased">
    <div class="container mx-auto p-6" v-if="article">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <p class="text-gray-700 mb-4">Published on: <time :datetime="article.publishDate">{{ article.publishDate }}</time></p>
      <p class="text-base text-gray-800 whitespace-pre-line">{{ article.content }}</p>
    </div>
    <div v-else>
      <p class="text-red-500">Article not found.</p>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const articlesData = [
  { id: 1, title: 'Pink Hopes', publishDate: '2023-02-10', content: `Those days,
I met you
And suddenly everything
Made sense!

The path I’ve taken
Every mistakes that I made,
Whole my life struggles,
including emotions like joy,love,
Each and every stuffs of my descision…
All it leads me to you!!

All my bad revolves becomes
the good one, reasons you!!!

Life was back being all blue,
Where there’s someone I can hold on to…
Passing the nights how I ended up here ?
Bringing the strong winds along with tsunami,
The wish, I could make was just disappear ??
Then life could have been easy for me today ???

Waiting for ,
The dark night could end up here ?
With it’s lost rays
Hoping for the brighter shine,
Over the moon and under your dine…..

Holding,
The day, to come up again,as before
Intenting the soul to get back,
Lightening up the candle with happiness of galore;
Creating forward,toring the dark….
Proposing the one to bent back,
Where no one else could ever be to me….
And, aspiration the good days to come ???
Knowbody Knows!!⚠️
` },
  { id: 2, title: 'A Single Chance', publishDate: '2019-02-12', content: `If you looked in the corners,
You'd find her right there,
Hidden by darkness,
And the curls in her hair,
Her nose in a book,
With her head in the clouds,
Hiding her feelings,
Away from the crowds,
If you sat by her side,
While the world passed you by,
She'd tell you the story,
Behind the pain in her eyes,
If you gave her five minutes.

You'd see how her smile,
Makes even the bad things
In life seem worthwhile,
But you don't look in corners,
You don't even glance,
So she sits there still waiting,
To be given a chance.` },
  { id: 3, title: 'Flying big.', publishDate: '2023-10-15', content: 'Content for Flying big article.' }
];

const article = ref(null);
const route = useRoute();

onMounted(() => {
  const articleId = parseInt(route.params.id);
  article.value = articlesData.find(a => a.id === articleId) || null;
});
</script>

<style scoped>
</style>
