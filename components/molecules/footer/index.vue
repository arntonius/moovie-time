<template>
  <div class="w-full bg-black-tertiary pt-12 pb-20 flex">
    <div
      class="w-full max-w-7xl mx-auto flex items-center justify-between px-7"
    >
      <p class="text-sm text-gray-secondary">
        © 2021 MoovieTime. All rights reserved.
      </p>
      <img
        src="@/assets/images/logo/movie-time-secondary.png"
        alt=""
        class=""
        quality="30"
      />
      <p class="text-sm text-gray-secondary">
        Made with Nuxt + Typescript + Tailwind CSS ❤️
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component({})
export default class MoleculesFooterIndex extends Vue {}
</script>
