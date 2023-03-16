/* eslint-disable camelcase */
import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
@Module({
  name: 'utils',
  stateFactory: true,
  namespaced: true,
})
export default class Utils extends VuexModule {
  activeIndex: number = 1
  activeCategory: string = ''

  @Mutation
  reset() {
    this.activeIndex = 1
    this.activeCategory = ''
  }

  @Mutation
  setActiveIndex(payload: number) {
    this.activeIndex = payload
  }

  @Mutation
  setActiveCategory(payload: string) {
    this.activeCategory = payload
  }

  get activeIndexData(): number {
    return this.activeIndex
  }

  get activeCategoryData(): string {
    return this.activeCategory
  }
}
