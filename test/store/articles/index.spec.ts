import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import articles from '@/store/articles/'

const localVue = createLocalVue()
localVue.use(Vuex)

let store: any
const initialArticles = [
  {
    id: '4e7d7d37-5e67-06ab-c2c8-44d161f08d0d',
    title: 'test1',
    body: 'test1',
    updatedAt: '2020-01-01 00:00:00',
  },
  {
    id: '57f913ad-c4ea-7e4e-b945-d3a795680bae',
    title: 'test2',
    body: 'test2',
    updatedAt: '2020-01-01 00:00:00',
  },
  {
    id: 'c8390cb5-e9d8-3ec3-fb28-22331b0f8c22',
    title: 'test3',
    body: 'test3',
    updatedAt: '2020-01-01 00:00:00',
  },
]

beforeEach(() => {
  // store = new Vuex.Store(cloneDeep(articles)) lodash.cloneDeep
  store = new Vuex.Store(articles)
  store.replaceState({ articles: initialArticles })
})
describe('actions', () => {
  test('createArticle', () => {
    const newArticle = { title: 'hoge', body: 'hogehoge' }
    store.dispatch('createArticle', newArticle)
    const articles = store.getters.articles
    expect(articles[articles.length - 1].title).toEqual(newArticle.title)
    expect(articles[articles.length - 1].body).toEqual(newArticle.body)
  })

  test('updateArticle', () => {
    const updatingArticle = store.getters.getArticleById(initialArticles[0].id)
    updatingArticle.title = 'fugafuga'
    store.dispatch('updateArticle', updatingArticle)
    const articles = store.getters.articles
    expect(articles.includes(updatingArticle)).toBeTruthy()
  })

  test('deleteArticle', () => {
    const deletingArticle = store.getters.getArticleById(initialArticles[0].id)
    store.dispatch('deleteArticle', deletingArticle.id)
    const articles = store.getters.articles
    expect(articles.includes(deletingArticle)).not.toBeTruthy()
  })
})

describe('getters', () => {
  test('articles', () => {
    expect(store.getters.articles).toEqual(initialArticles)
  })

  test('getArticleById', () => {
    const targetArticle = store.getters.getArticleById(initialArticles[0].id)
    expect(targetArticle).toEqual(initialArticles[0])
  })
})
