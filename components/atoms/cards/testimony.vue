<template>
  <div class="w-full max-w-xl bg-gray-100 rounded-2xl p-6">
    <div class="flex justify-between">
      <div class="flex items-center">
        <img
          :src="require(`@/assets/images/icon/${item.image}`)"
          alt="user-image-icon"
          quality="30"
          class="rounded-full w-12 h-12"
        />
        <div class="pl-4">
          <p class="text-black text-sm">{{ item.name }}</p>
          <p class="text-gray-quartenary text-xs">{{ parsedDateYear }}</p>
        </div>
      </div>
      <div class="flex bg-gray-senary rounded py-1 px-3">
        <img src="@/assets/images/icon/star.svg" alt="star-icon" />
        <p class="text-3xl font-bold text-black">{{ item.rate }}</p>
      </div>
    </div>
    <p class="italic text-xs text-black pt-7 line-clamp-7">
      {{ item.comment }}
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Review } from '~/types'
@Component({})
export default class AtomsCardsTestimony extends Vue {
  @Prop({ required: false, type: Object }) readonly item!: Review

  get parsedDateYear() {
    const tempYear: Date = new Date(this.item.date)
    return tempYear.getFullYear()
  }
}
</script>
