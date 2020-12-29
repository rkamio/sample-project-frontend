import { v4 as uuidv4 } from 'uuid'
import moment from 'moment'

import { Article } from '@/models/articles/Article'
import { SET_ARTICLES } from './mutations'

export default {
  createArticle({ getters, commit }: any, creatingArticle: Article): void {
    creatingArticle.id = uuidv4()
    creatingArticle.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')

    const articles = getters.articles.slice()
    articles.push(creatingArticle)
    commit(SET_ARTICLES, articles)
  },
  updateArticle({ getters, commit }: any, updatingArticle: Article) {
    updatingArticle.updatedAt = moment().format('YYYY-MM-DD HH:mm:ss')
    const articles = getters.articles
    const updatingIndex = articles.findIndex(
      (article: Article) => article.id === updatingArticle.id
    )
    articles[updatingIndex] = updatingArticle
    commit(SET_ARTICLES, articles)
  },
  deleteArticle({ getters, commit }: any, deletingId: string) {
    const deleted = getters.articles.filter(
      (article: Article) => article.id !== deletingId
    )
    commit(SET_ARTICLES, deleted)
  },
}
