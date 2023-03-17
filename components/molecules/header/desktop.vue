<template>
  <div class="w-full">
    <div
      class="flex w-full max-w-7xl mx-auto items-center justify-between px-7"
    >
      <div class="flex items-center w-3/5">
        <nuxt-link to="/">
          <img
            src="@/assets/images/logo/movie-time.png"
            alt="moovie-time-logo"
            class="block"
          />
        </nuxt-link>
        <div
          :class="isSecondary ? 'bg-opacity-25' : 'bg-opacity-100'"
          class="relative bg-black-quartenary rounded-lg flex items-center py-3 px-5 w-full ml-9"
        >
          <img
            src="@/assets/images/icon/movies.svg"
            alt="movies-icon"
            class="pr-4"
          />
          <input
            type="text"
            :value="input"
            :class="
              isSecondary ? 'bg-transparent bg-opacity-25' : 'bg-opacity-100'
            "
            class="w-full text-white text-md bg-black-quartenary placeholder-white outline-none border-none"
            placeholder="Find Movie"
            @input="handleInput"
          />
          <img
            v-if="input === ''"
            src="@/assets/images/icon/search.svg"
            alt="search-icon"
            class="pr-4"
          />
          <img
            v-else
            src="@/assets/images/icon/cross.svg"
            alt="cross-icon"
            class="pr-4 w-8"
            @click="input = ''"
          />
          <div
            v-if="listSearch.length !== 0 && input !== ''"
            class="absolute overflow-x-auto w-full h-min max-h-52 top-0 left-0 mt-14 bg-black-primary rounded p-4"
          >
            <div v-for="(list, key) in listSearch" :key="key">
              <nuxt-link
                :to="`/movies/${list.id}`"
                class="text-sm text-white w-full flex text-left p-2 hover:bg-gray-primary hover:rounded-lg"
              >
                {{ list.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <ul class="flex items-center w-auto">
        <li class="relative">
          <kit-atoms-buttons-with-image
            name="CATEGORIES"
            image="categories.svg"
            :click="() => (isCategoryShow = !isCategoryShow)"
          />
          <div
            v-if="isCategoryShow"
            class="absolute w-40 ml-0 py-4 pl-4 mt-2 bg-white shadow-xl rounded"
          >
            <div v-for="(list, key) in dataCategory" :key="key">
              <kit-atoms-buttons-category
                :name="list.name"
                :click="() => handleClickCategory(list.name)"
              />
            </div>
          </div>
        </li>
        <li class="flex items-center">
          <kit-atoms-links name="MOVIES" />
        </li>
        <li class="flex items-center">
          <kit-atoms-links name="TV SHOWS" />
        </li>
        <li class="flex items-center">
          <kit-atoms-links name="LOGIN" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, namespace } from 'nuxt-property-decorator'
import dataMockCategory from '@/mock/category.json'
import dataMovies from '@/mock/movies.json'
const utils = namespace('utils')
@Component({})
export default class MoleculesHeaderIndex extends Vue {
  @utils.Mutation setActiveCategory!: (value: string) => void

  @Prop({ required: false, type: Boolean, default: false })
  readonly isSecondary!: boolean

  isCategoryShow: boolean = false
  dataCategory: any = dataMockCategory.data
  input: string = ''
  listSearch: any = []

  @Watch('input')
  searchKeyWord() {
    const temp: any = dataMovies.movies
    const result = temp.filter((element: any) => {
      const itemData = this.parseSentences(element.title)
      const keywordData = this.parseSentences(this.input)
      return itemData.includes(keywordData)
    })
    this.listSearch = result
  }

  parseSentences(value: string) {
    const keywordLowerCase = value.toLowerCase()
    const keywordParsed = keywordLowerCase.replace(/ /g, '-')
    return keywordParsed
  }

  handleInput(e: Event) {
    const target: any = e.target
    this.input = target.value
  }

  handleClickCategory(payload: string) {
    this.isCategoryShow = false
    this.setActiveCategory(payload)
    this.$router.push('/list-movies')
  }
}
</script>
