<template>
  <button
    :class="
      isActive
        ? 'bg-red-primary hover:bg-red-secondary'
        : 'bg-black-primary bg-opacity-20 hover:bg-gray-800'
    "
    class="py-1 md:py-1.5 cursor-pointer px-2 rounded-full"
    @click="click"
  >
    <p class="text-white text-xs md:text-sm z-10">{{ name }}</p>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsButtonsSelector extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: false, type: Boolean, default: false })
  readonly isActive!: boolean

  @Prop({ required: false, default: () => {} })
  readonly click!: any
}
</script>
