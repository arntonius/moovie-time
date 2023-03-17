<template>
  <button
    class="text-white px-2.5 py-1 md:py-3 w-full text-left text-xs md:text-base"
    @click="click"
  >
    {{ name }}
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsButtonsSort extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: false, default: () => {} })
  readonly click!: any
}
</script>
