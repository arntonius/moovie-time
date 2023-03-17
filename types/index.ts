export interface Movies {
  id: number
  title: string
  rate: string
  release: string
  category: Array<string>
  image: string
  backgroundImage: string
  overview: string
  votes: number
  status: string
  language: string
  budget: string
  production: string
}

export interface RecommendationMovies {
  id: number
  idMovie: number
  title: string
  rate: string
  release: string
  category: Array<string>
  image: string
  backgroundImage: string
  overview: string
  votes: number
  status: string
  language: string
  budget: string
  production: string
}

export interface Review {
  id: number
  idMovies: number
  name: string
  rate: string
  image: string
  comment: string
  date: string
}
