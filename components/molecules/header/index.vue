<template>
  <div class="bg-black-senary fixed z-40 w-full h-16 flex items-center">
    <kit-molecules-header-mobile class="block md:hidden" />
    <kit-molecules-header-desktop class="hidden md:block fixed z-40" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesHeaderIndex extends Vue {}
</script>
