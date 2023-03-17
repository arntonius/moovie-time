<template>
  <a
    :href="url"
    class="text-center text-white text-xs md:text-sm px-1 md:px-4 py-3 cursor-pointer hover:rounded-lg hover:bg-gray-primary"
    >{{ name }}</a
  >
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsLinksIndex extends Vue {
  @Prop({ required: true, type: String }) readonly name!: string
  @Prop({ required: false, type: String, default: '/' })
  readonly url!: string
}
</script>
