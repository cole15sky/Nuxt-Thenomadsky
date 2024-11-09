<script setup>
const links = [{
    label: 'Home',
    to: '/'
},
{
    label: 'About',
    to: '/about'
},
{
    label: 'Articles',
    to: '/articles'
},


]

const isOpen = ref(false)
const route = useRoute()

const scheduleText = computed(() => {
    switch (route.path) {
        case '/agenda':
            return 'Event Schedules'
    }
})

</script>
<template>
    <div class=" h[1400px]relative bg-[center_top_-20rem] h-[400px] w-cover bg-gradient-to-r from-[#00012D] to-[#03025f] bg-cover text-white font-semibold py-4 px-2 md:px-20 space-y-4 text-sm"
        style="background-image: url('/Images/IMG_5508_Original.jpg');">
        <div class="absolute inset-0 bg-black opacity-40 h-[400px]"></div>
        
        
        <img  src="/nav-Img/logo_sky.png" alt="sky-logo"
            class="absolute top-11 left-15 rounded-lg z-10 h-10 sm:h-10 w:10  md:h-15 " />
        <div class="relative z-20 flex items-center justify-end space-x-4 text-xs">
            <div>
                <NuxtLink to="/login" 
                active-class="text-black"
                class="flex  items-center md:space-x-2">
                    <span>Login</span>
                    <UIcon name="material-symbols-light:lock-outline" class="w-5 h-5" />
                </NuxtLink>
            </div>
        </div>
        <div class="relative z-20 flex justify-end">
            <div class="hidden text-md min-[1400px]:flex w-3/4 lg:justify-evenly lg:items-center">
                <div v-for="link in links" :key="link.label">
                    <NuxtLink :to="link.to" active-class="text-black">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                
                <div class="parellelogram bg-blue-600 hover:bg-blue-500 file: py-2 px-10 flex items-center space-x-2 shadow-xl cursor-pointer">
                    <NuxtLink to="/gallery">
                        <h1 active-class="text-black"
                        > Gallery
                             </h1>
                </NuxtLink>

                </div>
            </div>
            <UIcon name='ic:baseline-menu' class="min-[1400px]:hidden w-10 h-10 cursor-pointer"
                @click="isOpen = true" />
        </div>


        <div class="hidden">
            <USlideover v-model="isOpen" prevent-close>
                <UCard class="flex flex-col flex-1"
                    :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex items-center justify-end">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                @click="isOpen = false" />
                        </div>
                    </template>

                    <Placeholder class="h-full space-y-2">
                        <div v-for="link in links" :key="link.label">
                            <NuxtLink :to="link.to" active-class="text-[#0058A0]">
                                {{ link.label }}
                            </NuxtLink>
                        </div>

                        <div class="parellelogram bg-[#0058A0] py-2 px-6 flex w-fit cursor-pointer">
                          <NuxtLink to="/gallery"><h1 class="">Gallery </h1></NuxtLink>
                        </div>
                    </Placeholder>
                </UCard>
            </USlideover>
        </div>
        <p class="hidden md:block md:absolute bottom-7 left-30 font-semibold text-4xl z-20">{{ scheduleText }}</p>
    </div>
</template>


<style scoped>
.parellelogram {
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>
