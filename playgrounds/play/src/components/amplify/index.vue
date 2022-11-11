<script lang='ts' setup>
import { } from 'vue'
import Css from './css.vue'
import Js from './js.vue'
import MyTransition from './transition.vue'
</script>

<template>
  <div class="c">
    <h1>amplify</h1>
    <div class="f">
      <Css />
      <Js />
      <MyTransition />
    </div>
  </div>
</template>

<style  scoped>
.f {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
}
.c{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
