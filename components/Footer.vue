<template>
    
    <div class="flex flex-col min-h-screen">
      <div class="flex-grow">
      </div>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
              <img src="/Assets/logo_sky.png" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Tech-NomadSky</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NuxtLink class="hover:underline me-4 md:me-6" to="/"> Home </NuxtLink>
              </li>
              <li>
                <NuxtLink class="hover:underline me-4 md:me-6" to="/about"> About </NuxtLink>
              </li>
              <li>
                <NuxtLink class="hover:underline me-4 md:me-6" to="/gallery"> Gallery </NuxtLink>
              </li>
              <li>
                <NuxtLink class="hover:underline me-4 md:me-6" to="/articles"> Articles </NuxtLink>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024<a class="hover:underline"> ThenomadSky™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
</template>