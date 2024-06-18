<template>
    <div>
        <NuxtLayout>
            <div>
                <h1>Welcome to the homepage</h1>
                <AppAlert>
                    This is an auto-imported component
                </AppAlert>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default'
})
</script>