<script setup lang="ts">
    const props = defineProps({
        text: {
            type: String,
            default: 'This is Nuxt'
        }
    })
</script>
<template>
    <div class="w-[500px] h-[150px] bg-red-400 flex items-center justify-center fixed top-0 left-1/2 -translate-x-1/2" style="width: 500px; height: 150px; background-color: brown; display: flex; justify-content: center; align-items: center; position: fixed; top: 0; left: 50%; transform: translateX(-50%);">
        <p>{{ text }}</p>
    </div>  

</template>