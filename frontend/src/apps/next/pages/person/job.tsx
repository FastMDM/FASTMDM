import { JobScreen } from 'app/screens/person/job'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default JobScreen

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


