import { Article } from '@/models/articles/Article'

export default {
  articles(state: any): Article[] {
    return state.articles
  },
  getArticleById(state: any): Function {
    return (id: string) => {
      return state.articles.find((article: Article) => article.id === id)
    }
  },
}
