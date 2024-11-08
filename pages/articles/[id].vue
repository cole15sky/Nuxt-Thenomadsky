<template>
  <main class="pt-8 pb-16 lg:pt-16 mt-14 lg:pb-24 bg-blue-100 min-h-screen dark:bg-blue-100 antialiased">
    <div class="container mx-auto p-6" v-if="article">
      <h1 class="text-3xl font-bold mb-4">{{ article.title }}</h1>
      <p class="text-gray-700 mb-4">Written on: <time :datetime="article.publishDate">{{ article.publishDate }}</time></p>
      <p class="text-base text-gray-800 whitespace-pre-line">{{ article.content }}</p>
      <p class="text-base text-gray-800 whitespace-pre-line">{{article.image }}</p>
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
  { id: 1, title: 'Supercharging Nuxt 3 with Server-Side Rendering (SSR): The Power of Nitro', publishDate: '2024-11-10' ,image: ``, content: `Nuxt 3 makes server-side rendering super intuitive with Nitro—it runs anything inside the server/ folder automatically. No need for extra config! I can just drop my server logic there, and Nitro will handle the rest.

Setting Up the Server Directory Structure
Here’s how I need to structure the server/ folder for clean server-side logic:

server/api/: For all my API routes
server/routes/: For organizing routes (although usually, the folder structure alone works)
server/middleware/: Where custom middleware goes
Example layout for clarity:

plaintext
Copy code
|- server/
|  |- api/
|  |  |- blogs/
|  |  |  |- [id].ts          # For fetching by blog ID
|  |  |  |- index.ts          # Lists blogs
|  |  |  |- publish.post.ts   # Publishes a blog
|  |- middleware/
|  |  |- auth.ts              # Authentication middleware
Creating API Routes
To create an endpoint, I just need to create a file in server/api.

For example, server/api/blogs/index.ts will handle GET and POST requests for blog posts. Nuxt 3 even lets me suffix the file with .get, .post, etc., so I don’t have to check the HTTP method inside the function!

javascript
Copy code
// ~/server/api/blogs/publish.post.ts
export default defineEventHandler((event) => {
  // Logic to save and publish
  return { success: true };
});
Here, a POST request to /api/blogs/publish responds with { success: true }. Any other HTTP method will get a 404.

Catch-All Routes for Flexibility
If I want a "catch-all" route for APIs, I can create ~/server/api/[...].ts. This file catches any requests that don’t match other routes. One catch: I have to handle everything in one defineEventHandler.

javascript
Copy code
// ~/server/api/[...].ts
export default defineEventHandler((event) => {
  if (event.req.url.startsWith('/api/publications')) {
    // handle publications route
  }
  // Add more conditions as needed
});
Adding Middleware for Control
Nuxt 3 auto-generates middleware from files in server/middleware/. Middleware runs on every request, so it’s perfect for things like authentication checks.

Example: Adding auth.ts for basic auth checks:

javascript
// ~/server/middleware/auth.ts
import { sendError } from 'h3';

export default defineEventHandler((event) => {
  if (!event.req.url.startsWith('/api') || event.req.headers.authorization) return;

  sendError(event, new Error('Unauthorized'));
});
Creating Utilities for Reuse
I’ll probably need utilities like custom error handlers, so I’ll add them in a helpers or utils folder in server/. Just avoid naming it api, routes, or middleware so Nuxt doesn’t try to register it.

Example error handler:

javascript
// ~/server/helpers/handleError.js
import { sendError, createError } from 'h3';

export default function handleError(err, event) {
  const error = createError({
    statusCode: err.status,
    statusMessage: err.status,
    data: err.body,
  });
  sendError(event, error);
}
With this setup, Nuxt 3 keeps my SSR code clean and organized, and Nitro makes server logic and APIs way easier to manage. Just keep the structure straight, and everything else flows!
















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
  { id: 3, title: 'Choices', publishDate: '2023-10-15', content: `A wild varieties of people walks this world,
with their motive and purpose in their eyes.
Struggling to live a real life they really dreamed for ?
But, in their heart of hearts they know.
Yeah they only know!!

As usually, day starts with the alarm beep,
going off at 6 am,
a cup of coffee with some snacks & breakfast at 10.
Walking into the job they hate cause, they need the pay to continue their existing

Being busy at the office with over loaded work, ending the day at 5pm with frustrated , tired and weird face to home.
Spending some hours doing or wandering like shits.
Finally, dinner at 8 and bed rest sleep!!
Damn it!

I’m all to scared that one day soon,
I’ll become just like the rest as above!
Walking along with the mass and crouded world,
Optimising along with prohibiting my dreams,
thinking about the expected days and knowing onself how i ended up here ?
Leading the journey, oppressyed with my own fantasy.
Realizing that all i could was only scuffleing the each days continuously, which i guess never comes….

That one day I’ll look back on life, at the moments and opportunities that I really missed, concluding that i did never live.
All I was just existing myself!!
God knows ?
I did really have no choices left for ??` },
  { id: 4, title: 'A wave of fun', publishDate: '2023-10-15', content: `
  I was watching the sunrise,
With you by my side ;
Holding your hand in my hand,
Together,
Enjoying the despise land.

A mug of coffee,
Sharing with caring ;
Uncaring the world,
Living with no fearing.

Time over the hot, long summer,
Spreading by so fast ;
By seeing her contrast,
I wished, those days would ever last.

Making the love in the air,
I became busy building her hair ;
Listening to her shitts,
Flowing with one’s heart beats.

Laughing on the joke,
Swinging the long hammock;
Forward and back,
Refreshing with a small pack.

Than, I started singing a song,
She began, cheering with clap ;
Suddenly, the hammock tore up,
Those memories will never bore up.

Time passed,
After a long, we found those pics,
In my old bag colored blue;
We recall the fuckin memories and started singing,
Memories bring back, Memories bring back you!! 😂`




  
  }

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
