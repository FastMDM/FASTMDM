import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { NativeModules } from 'react-native';


var deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

deviceLanguage = deviceLanguage.search(/-|_/) !== -1
  ? deviceLanguage.slice(0, 2)
  : deviceLanguage;

  /*
export const i18n = new I18n({
  en: en,
  ru: ru
})
*/

  
const resources = {
    en: { welcome: 'Hello' },
    ja: { welcome: 'こんにちは' },
  };

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng: deviceLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    cleanCode: true,
  });

export default i18n;