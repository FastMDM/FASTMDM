import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'


import { useTranslation } from '../../utils/localization'

export function AboutScreen() {
  const { t } = useTranslation('common')

  return (
    <View className="flex-1 items-left justify-left p-3">
      <H1 className="text-center text-black dark:text-white">About Us</H1>
      <P className="text-black dark:text-white">
      Fast Master Data Management (FastMDM) — open source master data hub, comprehensive and efficient platform designed to streamline and optimize the management of master data for global users with SaaS and On Prem models. FastMDM stores data about organisations, products, services, personnel, technologies, materials etc.:
      </P>
      {/*
      <ul className="list-disc text-black dark:text-white">
        <li>Metadata as code. Centrally store a unified structure of data and relationships between data.</li>
        <li>Data quality. Data mapping, cleansing, deduplication and enrichment.</li>
        <li>Multitenancy. Authentication, authorization, policies, access control to use data.</li>
        <li>Multilanguage. Data storage in many languages, attended and unattended data translation.</li>
        <li>Data integration. API eliminates the need for manual data entry and reduces the risk of errors or duplications.</li>
      </ul>
      <ul className="list-disc text-black dark:text-white">
         <li>Metadata as code. Centrally store a unified structure of data and relationships between data.</li>
         <li>Data quality. Data mapping, cleansing, deduplication and enrichment.</li>
         <li>Multitenancy. Authentication, authorization, policies, access control to use data.</li>
         <li>Multilanguage. Data storage in many languages, attended and unattended data translation.</li>
         <li>Data integration. API eliminates the need for manual data entry and reduces the risk of errors or duplications.</li>
       </ul>
       */}
    </View>
  )
}
