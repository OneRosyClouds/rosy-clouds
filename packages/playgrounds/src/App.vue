<script lang="ts" setup>
import { ref } from 'vue'
const a = ref(false)
</script>

<template>
  <div class="">
    <Transition name="__hover__amplify__transition">
      <button v-if="a">
        哈哈哈啊
      </button>
    </Transition>
    <div>
      <button class="__hover__amplify__css" @click="a = !a">
        1123123
      </button>
    </div>
  </div>
</template>
