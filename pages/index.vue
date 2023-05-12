<template>
    <What />
    <p class="des" ref="des">Description</p>
</template>

<script lang="ts" setup>
    const config = useRuntimeConfig()
    // console.log(config.baseUrl,123);
    const des = ref(null);
    onBeforeMount(() => {
        console.log(des.value,1);

    })
    onMounted(() => {
        console.log(des.value,2);
        
        
    })
</script>

<style>

</style>