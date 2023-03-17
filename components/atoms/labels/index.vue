<template>
  <div class="pt-2 md:pt-0 md:px-8 md:border-r-2 md:border-gray-400">
    <p class="text-xs pt-1 text-gray-tertiary">{{ title }}</p>
    <p class="text-xs pt-1 text-black-senary md:text-white">
      {{ value }}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsLabelsIndex extends Vue {
  @Prop({ required: true, type: String }) readonly value!: string
  @Prop({ required: true, type: String }) readonly title!: string
}
</script>
