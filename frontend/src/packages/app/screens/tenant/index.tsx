import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from '../../utils/localization'

export function TenantScreen() {
  const { t } = useTranslation('common')
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1 className="text-center text-black dark:text-white">{t('tenant')}</H1>
      <P className="text-center text-black dark:text-white">{t('under-construction')}</P>      
      <View className="max-w-xl">
        <P className="text-center text-black dark:text-white">{t('skeleton')}</P>
      </View>
    </View>
  )
}
