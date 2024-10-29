<script setup>

const images = ref([
  
  { path: '/Images/sunset-valley.jpg', orientation: 'landscape' },
  { path: '/Images/sunsethome.jpeg', orientation: 'landscape' },
  { path: '/Images/ktm.jpg', orientation: 'landscape' },

  { path: '/Images/IMG_2903_Original.jpg', orientation: 'portrait' },
  { path: '/Images/20240421_164800_Original.jpg', orientation: 'portrait' },
  { path: '/Images/IMG_6362_Original.jpg', orientation: 'portrait' },

  { path: '/Images/sauraha.jpg', orientation: 'landscape' },
  { path: '/Images/12.jpg', orientation: 'landscape' },
  { path: '/Images/yak-kharka.jpg', orientation: 'landscape' },

  { path: '/Images/IMG_9398_Original.jpg', orientation: 'portrait' },
  { path: '/Images/IMG_4823.JPG', orientation: 'portrait' },
  { path: '/Images/IMG_023_Original.jpg', orientation: 'portrait' },

  { path: '/Images/IMG_04_Original.jpg', orientation: 'landscape' },
  { path: '/Images/IMG_092_Original.jpg', orientation: 'landscape' },
  { path: '/Images/IMG_9236_Original.jpg', orientation: 'landscape' }
  ,
  { path: '/Images/IMG_4340_Original.jpg', orientation: 'landscape' },
  { path: '/Images/IMG_3110_Original.jpg', orientation: 'landscape' },
  { path: '/Images/pul1.JPG', orientation: 'landscape' },

  { path: '/Images/IMG_0599_Original.jpg', orientation: 'landscape' },
  { path: '/Images/IMG_0457_Original.jpg', orientation: 'landscape' },
  { path: '/Images/IMG_5508_Original.jpg', orientation: 'landscape' },
  
//   { path: '/Images/20240423_230912.jpg', orientation: 'landscape' },
  


]);

// Function to return grid class based on image orientation
const getGridClass = (image) => {
  return image.orientation === 'portrait' ? 'col-span-1 row-span-2' : 'col-span-1 row-span-1';
};
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105"
        :class="getGridClass(image)"
      >
        <img :src="image.path" alt="Gallery Image" class="w-full h-full object-cover" />
      </div>
    </div>
  </template>
  