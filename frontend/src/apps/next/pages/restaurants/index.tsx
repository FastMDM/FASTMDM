import { RestaurantScreen, RestaurantScreenGetServerSideProps } from 'app/screens/restaurant'

export default Restaurants

import delve from "dlv";
// import { getData, getRestaurants, getStrapiURL, handleRedirection } from "app/utils";
// import { getLocalizedParams } from "app/utils/localize";
import React from "react";

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

// This gets called on every request


export async function getServerSideProps(context: any) {
  console.log ("u101")
  return RestaurantScreenGetServerSideProps(context);
}
/*
    console.log ("t101");
    const { locale } = getLocalizedParams(context.query);
  
    const data = getData(
      null,
      locale,
      "restaurant-page",
      "singleType",
      context.preview
    );
  
    try {
      const resRestaurantPage = await fetch(delve(data, "data"));
      const restaurantPage = await resRestaurantPage.json();
      const perPage = delve(restaurantPage, "restaurantsPerPage") || 12;
  
      const resRestaurants = await fetch(
        getStrapiURL(
          `/restaurants?pagination[limit]=${perPage}&locale=${locale}&pagination[withCount]=true&populate=images,place,category,header`
        )
      );
      const restaurants = await resRestaurants.json();
  
      const resCategories = await fetch(
        getStrapiURL(`/categories?pagination[limit]=99`)
      );
      const categories = await resCategories.json();
  
      const resPlaces = await fetch(getStrapiURL(`/places?pagination[limit]=99`));
      const places = await resPlaces.json();
  
      if (
        !restaurants.data.length ||
        !categories.data.length ||
        !places.data.length
      ) {
        return handleRedirection(context.preview, "");
      }
  
      return {
        props: {
          initialData: {
            restaurants: restaurants.data,
            count: restaurants.meta.pagination.total,
          },
          pageData: restaurantPage.data,
          categories: categories.data,
          places: places.data,
          locale,
          perPage,
          preview: context.preview || null,
        },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    */

  

