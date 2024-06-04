import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

export function DiagnosticsScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1 className="text-center text-black dark:text-white">Diagnostics</H1>
      <P className="text-center text-black dark:text-white">Under construction</P>      
      <View className="max-w-xl">
        <P className="text-center text-black dark:text-white">
        This project is an application skeleton. You can use it to quickly tailwind your ReactJS webapp projects and dev environment for these projects.
The seed app doesn't do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.
        </P>
      </View>
    </View>
  )
}
