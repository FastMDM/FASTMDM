/*
import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Knowledge development works</H1>
      <View className="max-w-xl">
        <P className="text-center">
         #1 cluster of knowledge mining wells
        </P>
      </View>
    </View>
  )
}
*/

import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from '../../utils/localization'

export function HomeScreen() {
  const { t } = useTranslation('common')
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1 className="text-center text-black dark:text-white">{t('knowledge-development-works')}</H1>   
      <View className="max-w-xl">
        <P className="text-center text-black dark:text-white">{t('1-cluster-of-knowledge-mining-wells')}</P>
      </View>
    </View>
  )
}

