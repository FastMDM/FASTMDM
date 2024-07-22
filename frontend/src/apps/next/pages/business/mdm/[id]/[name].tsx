import { CompanyScreen } from 'app/screens/business/mdm/process'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default CompanyScreen

type Props = {
  // Add custom props here
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common' ])),
  },
})


