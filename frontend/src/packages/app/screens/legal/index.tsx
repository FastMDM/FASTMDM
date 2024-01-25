import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from '../../utils/localization'

export function LegalScreen() {
  const { t } = useTranslation('common')
  console.log("page legal")
  console.log(t('legal'))
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>{t('legal')}</H1>
      <P>{t('under-construction')}</P>      
      <View className="max-w-xl">
        <P className="text-center">{t('skeleton')}</P>
      </View>
    </View>
  )
}
