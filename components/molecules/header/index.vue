<template>
  <div
    :class="isSecondary ? 'bg-transparent shadow-lg ' : 'bg-black-senary'"
    class="fixed z-40 w-full h-16 flex items-center"
  >
    <kit-molecules-header-mobile class="block md:hidden" />
    <kit-molecules-header-desktop
      class="hidden md:block fixed z-40"
      is-secondary
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesHeaderIndex extends Vue {
  @Prop({ required: false, type: Boolean, default: true })
  readonly isSecondary!: boolean
}
</script>
