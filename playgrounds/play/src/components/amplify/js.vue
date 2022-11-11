<script lang='ts' setup>
import { amplify } from '@rosy-clouds/core'
import { ref } from 'vue'
const Btn = ref()

function start() {
  amplify(Btn.value)
}
</script>

<template>
  <div class="">
    <button ref="Btn" @click="start">
      js
    </button>
  </div>
</template>

<style lang='scss' scoped>
</style>
