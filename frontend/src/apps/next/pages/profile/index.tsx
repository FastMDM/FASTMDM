import { ProfileScreen } from 'app/screens/profile'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default ProfileScreen

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


