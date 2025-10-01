<script setup lang="ts">
import { Head } from '@inertiajs/vue3';

// Define the shape of a contact
interface Contact {
    id: number;
    name: string;
    email: string;
    image_url: string | null;
}

// Type props properly
const props = defineProps<{
    contacts: Contact[];
}>();
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div class="flex w-screen flex-col justify-center p-6">
        <h1 class="mb-6 text-3xl font-bold">Contact List</h1>

        <div class="grid grid-rows-1 gap-2">
            <div
                v-for="c in props.contacts"
                :key="c.id"
                class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md transition hover:shadow-lg"
            >
                <img v-if="c.image_url" :src="c.image_url" alt="Avatar" class="h-16 w-16 rounded-full border object-cover" />
                <div>
                    <h2 class="text-lg font-semibold text-gray-800 capitalize">{{ c.name }}</h2>
                    <p class="text-sm text-gray-500">{{ c.email }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
