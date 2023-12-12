// @ts-check
const path = require('path')
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'az', 'cs', 'da', 'de', 'es', 'fr', 'ru', 'ja', 'zh_Hans'],
    localePath: path.resolve('../../packages/app/utils/localization/locales'),
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('../../packages/app/utils/localization/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}