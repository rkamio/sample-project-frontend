import Router from 'vue-router'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import * as SentryTypes from '@sentry/minimal'

// NOTE: https://mabui.org/nuxt-js-typescript-setup-guide/#i-3

declare module 'vue/types/vue' {
  interface Vue {
    $router: Router
    mixinMethod: () => void
    $axios: NuxtAxiosInstance
    $sentry: typeof SentryTypes
    $gtm: {
      push(event: { event: string; [key: string]: any }): void
    }
  }
}

// TODO: pluginとかmiddlewareの型付け
