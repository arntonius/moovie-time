<template>
  <button
    class="flex items-center text-white text-sm px-4 py-3 hover:rounded-lg hover:bg-gray-primary"
    @click="click"
  >
    <img
      :src="require(`@/assets/images/icon/${image}`)"
      alt="movies-icon"
      class="pr-3"
    />
    {{ name }}
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsButtonsWithImage extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: true, type: String }) readonly image!: string
  @Prop({ required: false, default: () => {} })
  readonly click!: any
}
</script>
