import { i18n, useTranslation as useNextTranslation } from 'next-i18next'
import { useRouter as useNextRouter } from 'next/router'
import { useRouter } from 'solito/router'

export const useTranslation = (file: string) => {
  const { push } = useRouter()
  const { t, i18n } = useNextTranslation(file)
  const { pathname, asPath } = useNextRouter()
  const changeTo = i18n.language === 'en' ? '' : 'en'

  const changeLanguage = () => {
    push(`/${changeTo}${pathname}`, `/${changeTo}${asPath}`, {
      locale: false,
    })
  }

  return {
    t,
    i18n: i18n,
    language: i18n.language,
    changeLanguage,
  }
}