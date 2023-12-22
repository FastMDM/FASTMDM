import { RestaurantScreen } from 'app/screens/restaurant'

export default Restaurants


export function Restaurants(
  {
  global,
  initialData,
  pageData,
  categories,
  places,
  locale,
  perPage,
  preview,
} ) {

  //const pagedata =   RestaurantScreenGetServerSideProps(context);

  return (
    <RestaurantScreen global={global} initialData={initialData} pageData={pageData} categories={categories}
        places={places} locale={locale} perPage={perPage} preview={preview}/>
  )
}

