<template>
  <div class="bg-black-senary fixed z-40 w-full h-16 flex">
    <div class="flex w-full justify-between items-center p-4">
      <nuxt-link to="/" class="flex items-center">
        <img
          src="@/assets/images/icon/burger-menu.svg"
          alt="burger-menu-icon"
          class="w-8 mr-4"
        />
        <img
          src="@/assets/images/logo/movie-time.png"
          alt="moovie-time-logo"
          class="w-20"
        />
      </nuxt-link>
      <img
        src="@/assets/images/icon/search.svg"
        alt="movies-icon"
        class="w-4"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component({})
export default class MoleculesHeaderMobile extends Vue {}
</script>
