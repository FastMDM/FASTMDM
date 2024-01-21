

//import { useRouter as useNextRouter } from 'next/router'
import {Platform} from 'react-native';

import { useRouter } from 'solito/router'
import { useTranslation as useReactTranslation, initReactI18next  } from 'react-i18next';
import { NativeModules} from 'react-native';
import i18n from 'i18next';
import 'intl-pluralrules'

import ar from './locales/ar/common.json'
import az from './locales/az/common.json'
import cs from './locales/cs/common.json'
import da from './locales/da/common.json'
import de from './locales/de/common.json'
import en from './locales/en/common.json'
import es from './locales/es/common.json'
import fr from './locales/fr/common.json'
import ja from './locales/ja/common.json'
import ru from './locales/ru/common.json'
import zh from './locales/zh_Hans/common.json'

const resources  = {
  ar: {common: ar},
  az: {common: az},
  cs: {common: cs},
  da: {common: da},
  de: {common: de},
  en: {common: en},
  es: {common: es},
  fr: {common: fr},
  ja: {common: ja},
  ru: {common: ru},
  zh: {common: zh}
}


var deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

deviceLanguage = deviceLanguage.search(/-|_/) !== -1
  ? deviceLanguage.slice(0, 2)
  : deviceLanguage;

//deviceLanguage = "zh"

i18n
  .use(initReactI18next)
  .init({
//    compatibilityJSON: 'v3', 
    resources: resources,
    lng: deviceLanguage, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    defaultNS: 'common',
    ns: ['common' ],
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export const useTranslation = (file: string) => {

//  const { push } = useRouter()
//  const { t, i18n } = useNextTranslation(file)
//  const { pathname, asPath } = useNextRouter()
//  const changeTo = i18n.language === 'en' ? '' : 'en'

  const { t} = useReactTranslation(file) 

  const changeLanguage = () => {
//    push(`/${changeTo}${pathname}`, `/${changeTo}${asPath}`, {
//      locale: false,
//    })
  }

//  console.log(t('skeleton'))
//  console.log(i18n.language)
//  console.log(i18n.languages)

  return {
    t,
    i18n,
    language: i18n.language,
    changeLanguage,
  }
}


