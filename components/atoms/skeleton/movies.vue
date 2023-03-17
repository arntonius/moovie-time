<template>
  <div>
    <div
      class="animate-pulse bg-gray-300 h-44 w-32 md:h-80 md:w-56 rounded-lg"
    />
    <div
      class="animate-pulse w-1/2 h-3 md:h-5 rounded-lg bg-gray-300 mt-2"
    ></div>
    <div
      class="animate-pulse w-1/3 h-3 md:h-5 rounded-lg bg-gray-300 mt-2"
    ></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsSkeletonMovies extends Vue {}
</script>
