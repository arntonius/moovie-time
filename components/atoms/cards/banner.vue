<template>
  <div class="flex">
    <img src="@/assets/images/movies/space-sweeper.png" alt="" quality="30" />
    <div class="px-6 pt-6 bg-black-primary w-72 my-5">
      <div class="flex items-center">
        <font-awesome-icon
          ref="chartIcon"
          :icon="['fab', 'whatsapp']"
          class="text-yellow-300 pr-2.5 text-2xl inline-block"
        />
        <p class="text-lg font-bold text-white">7.0</p>
      </div>
      <h3 class="text-white text-2xl">Space Sweepers</h3>
      <div class="flex items-center pt-3">
        <p class="text-white text-md">2021</p>
        <font-awesome-icon
          ref="chartIcon"
          :icon="['fab', 'whatsapp']"
          class="text-yellow-300 px-1 text-sm inline-block"
        />
        <p class="text-white text-md">Sci-Fi</p>
      </div>
      <p class="text-white text-xs pt-3">
        When the crew of a space junk collector ship called The Victory
        discovers a humanoid robot named Dorothy that's known to be a weapon of
        mass destruction, they get involved in a risky business deal which puts
        their lives at stake.
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({})
export default class AtomsCardsBanner extends Vue {
  @Prop({ required: false, type: Object }) readonly items!: any
}
</script>
