import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useEffect, useState } from "react";  

// components

import { RestaurantFilter } from 'app/components/restaurant/filter'
import { RestaurantList } from '../../components/restaurant/list'
import { getData, getRestaurants, getStrapiURL, handleRedirection } from "app/utils";
import { getLocalizedParams } from "app/utils/localize";
import delve from "dlv";

// This gets called on every request

export async function RestaurantScreenGetServerSideProps(context: any) {
  console.log ("t101");
  var locale; 
  if (context) ({ locale } = getLocalizedParams(context.query))
  else locale= "en";

  const data = getData(
    null,
    locale,
    "restaurant-page",
    "singleType",
    context.preview
  );

  console.log ("t102");
  console.log (data);
  try {
    // const resRestaurantPage = await fetch(delve(data, "data"));
    // const resRestaurantPage = await fetch("http://localhost:1337/api/restaurant-page?locale=en&populate[blocks][populate]=*,buttons.link&populate=localizations&populate[header]=*&populate[seo]=metaSocial");
    const resRestaurantPage = await fetch("http://localhost:1337/api/restaurant-page?locale=en&populate%5Bblocks%5D%5Bpopulate%5D=%2A,buttons.link&populate=localizations&populate%5Bheader%5D=%2A&populate%5Bseo%5D=metaSocial");
    

    console.log ("t103");
    const restaurantPage = await resRestaurantPage.json();
    console.log (restaurantPage)
    console.log ("t104");
    const perPage = delve(restaurantPage, "restaurantsPerPage") || 12;

    console.log ("t102");
    console.log (getStrapiURL(
      `/restaurants?pagination[limit]=${perPage}&locale=${locale}&pagination[withCount]=true&populate=images,place,category,header`));
    
    
    const resRestaurants = await fetch(
      getStrapiURL(
        `/restaurants?pagination[limit]=${perPage}&locale=${locale}&pagination[withCount]=true&populate=images,place,category,header`
      )
    );
    const restaurants = await resRestaurants.json();

    console.log (restaurants)

    console.log ("t103");

    const resCategories = await fetch(
      getStrapiURL(`/categories?pagination[limit]=99`)
    );
    const categories = await resCategories.json();

    console.log ("t104");

    const resPlaces = await fetch(getStrapiURL(`/places?pagination[limit]=99`));
    const places = await resPlaces.json();

    if (
      !restaurants.data.length ||
      !categories.data.length ||
      !places.data.length
    ) {
      return console.log("Empty data.");
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
    console.log ("e101");
    return console.log(error);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

// layout for page

export function RestaurantScreen(
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
  return (

  <div className="flex flex-wrap">
    <div className="w-full lg:w-2/12 px-4">

        <RestaurantFilter global={global} initialData={initialData} pageData={pageData} categories={categories} places={places} locale={locale} perPage={perPage} preview={preview} />

    </div>
    <div className="w-full lg:w-10/12 px-4">
          
      <RestaurantList global={global} initialData={initialData} pageData={pageData} categories={categories} places={places} locale={locale} perPage={perPage} preview={preview}/>
            
    </div>
  </div>
  )
}
