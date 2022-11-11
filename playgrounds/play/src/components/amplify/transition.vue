<script lang='ts' setup>
import { ref } from 'vue'
const isShow = ref(false)
</script>

<template>
  <div class="f">
    <div class="c" @click="isShow = !isShow">
      {{ isShow ? '关' : '开' }}
    </div>
    <Transition name="light__amplify__transition">
      <button v-if="isShow">
        Transition
      </button>
    </Transition>
    <div />
  </div>
</template>

<style scoped>
.f {
  display: flex;
  justify-content: center;
  align-items: center;
}
.c {
  cursor: pointer;
}
</style>
