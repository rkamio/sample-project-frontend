import { Article } from '@/models/articles/Article'

export const SET_ARTICLES = 'SET_ARTICLES'

export default {
  [SET_ARTICLES](state: any, articles: Article[]) {
    state.articles = articles
  },
}
