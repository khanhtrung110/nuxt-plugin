<script setup lang="ts">
  const { $useNotify } = useNuxtApp();
  const counter = reactive({data:{test:1}});
  const counterComputed = computed(()=>{
    return counter;
  })
  const stateNotify = ref(false)

  const handleNotify = () => {
    stateNotify.value = !stateNotify.value;
    console.log('stateNotify.value',stateNotify.value);
    
    if (stateNotify.value) {
      $useNotify('Your success.');
    }else {
      useNuxtApp().$event('close');
    }
  }

  watch(()=>counter,(val)=>{
    // console.log('watch',val);
    
  },{immediate: true})
  watchEffect(()=>{
    // console.log('watchEffect',counter.data.test);
  })

</script>
<template>
  <!-- <button @click="">Click</button> -->
  <div>
  <div>
    Counter: {{ counterComputed }}
    <button @click="counter.data.test++">
      +
    </button>
    <button @click="counter.data.test--">
      -
    </button>
  </div>
  <div>
    <button @click="handleNotify">Click Show Notify</button>
  </div>
</div>
</template>
<style lang="scss" scoped>
  div {
    h1 {
      @apply text-red-500;
    }
  }
</style>