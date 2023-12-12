import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'


import delve from "dlv";
import { useState } from "react";
import { useQuery } from "react-query";
import NoResults from "app/components/no-results";
import RestaurantCard from "app/components/pages/restaurant/RestaurantCard";
import BlockManager from "app/components/shared/BlockManager";
import Container from "app/components/shared/Container";
import Header from "app/components/shared/Header";
import { getData, getRestaurants, getStrapiURL, handleRedirection } from "app/utils";
import { getLocalizedParams } from "app/utils/localize";


/*
export function RestaurantList() {
  return (
    <View className="flex-1 items-center justify-center p-3">
      <H1>Restaurants</H1>
      <P>Under construction</P>      
      <View className="max-w-xl">
        <P className="text-center">
This project is an application skeleton. You can use it to quickly tailwind your ReactJS webapp projects and dev environment for these projects.
The seed app doesn't do much and has most of the feature removed so you can add theme as per your needs just following the demo app examples.
        </P>
      </View>

    </View>
  )
}
*/

export function  RestaurantList (
  {
  global,
  initialData,
  pageData,
  categories,
  places,
  locale,
  perPage,
  preview,
} )

{
  /*
  var   global,
  initialData,
  pageData,
  categories,
  places,
  locale,
  perPage,
  preview;
  */

  const [placeId, setPlaceId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const blocks = delve(pageData, "attributes.blocks");
  const header = delve(pageData, "attributes.header");
  const placeText = delve(pageData, "attributes.placeText");
  const categoryText = delve(pageData, "attributes.categoryText");

  const { data, status } = useQuery(
    [
      "restaurants",
      { category: categoryId },
      { place: placeId },
      { locale: locale },
      { page: pageNumber },
      { perPage },
    ],
    getRestaurants,
    {
      initialData,
    }
  );

  console.log("!!!data");
  console.log ( `data= ${data}`);
  console.log ( `categoryId= ${categoryId}`);
  console.log ( `placeId= ${placeId}`);
  console.log ( `locale= ${locale}`);
  console.log ( `pageNumber= ${pageNumber}`);
  //console.log ( `initialData= ${JSON.stringify(initialData)}`);


  const lastPage = Math.ceil(data.count / perPage) || 1;

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row gap-2 my-24 px-4">

        </div>

        <NoResults status={status} length={delve(data, "restaurants").length} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16 mt-24 px-4">
          {status === "success" &&
            delve(data, "restaurants") &&
            data.restaurants.map((restaurant, index) => (
              <RestaurantCard
                {...restaurant.attributes}
                locale={locale}
                key={index}
              />
            ))}
        </div>

        {delve(data, "count") > 0 && (
          <div className="grid grid-cols-3 gap-4 my-24">
            <div className="col-start-2 col-end-3">
              <div className="flex items-center">
                <button
                  type="button"
                  className={`${
                    pageNumber <= 1 ? "cursor-not-allowed opacity-50" : ""
                  } w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none`}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>

                <button
                  type="button"
                  className={`${
                    pageNumber >= lastPage
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  } w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 focus:outline-none`}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  disabled={pageNumber >= lastPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
      <BlockManager blocks={blocks} />
    </div>
  );
};


//export default RestaurantList;  