<template>
  <button
    class="text-black-primary w-full pb-3 text-left text-xs uppercase hover:text-blue-800"
    @click="click"
  >
    {{ name }}
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsButtonsCategory extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: false, default: () => {} })
  readonly click!: any
}
</script>
