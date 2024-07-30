import { ProductScreen } from 'app/screens/product'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default ProductScreen

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


