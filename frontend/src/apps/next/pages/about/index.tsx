import { AboutScreen as AboutScreen2 } from 'app/screens/about'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { headers } from "next/headers";

export function AboutScreen() {

  /*
  const headersList = headers();

  // Display the key/value pairs
  headersList.forEach((value, key) => {
    console.log(`${key} ==> ${value}`);
  });
  */
 
  return 
  <div>
    { AboutScreen2() }

  </div>
}

export default AboutScreen

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


