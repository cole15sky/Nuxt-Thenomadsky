<template>
    <div mt-100>
        <section>
        <ClientOnly>
            <Quill v-model="body"/>
        </ClientOnly>
        <!-- <div>
            {{ body }}
        </div> -->
        <main v-html="body">

        </main>
    </section>

    </div>
</template>

<script setup>
import { content } from '#tailwind-config';
const body =ref("");
</script>