<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        <img :src="image" alt="Gallery Image" class="w-full h-auto" />
      </div>
      <!-- <img :src="images[0]" alt=""> -->
    </div>
  </template>
  
  <script setup>
  
  // Create an array of image paths
  const images = ref([
  ('/Images/sunset-valley.jpg'),
  ('/Images/sunsethome.jpeg'),
  ('/Images/ktm.jpg'),
  ('/Images/sauraha.jpg'),
  ('/Images/12.jpg'),
  ('/Images/yak-kharka.jpg'),
  ('/Images/pul1.JPG'),


]);
  </script>
 