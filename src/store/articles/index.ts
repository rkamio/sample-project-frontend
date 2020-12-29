import { Article } from '@/models/articles/Article'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export const state = () => ({
  articles: [
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
  ] as Article[],
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
