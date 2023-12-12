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



export function  RestaurantFilter (
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
  var   global,
  initialData,
  pageData,
  categories,
  places,
  locale,
  perPage,
  preview;

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
  console.log ( data);

  const lastPage = Math.ceil(data.count / perPage) || 1;

  return (
    <div>
      <Container>
        <div className="flex flex-wrap px-4">
          <div>
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setCategoryId(delve(value, "target.value"))}
            >
              <option value="">
                {categoryId
                  ? "Clear filter"
                  : categoryText || "Select a category"}
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={`categoryOption-${index}`}
                    value={delve(category, "attributes.id")}
                  >
                    {delve(category, "attributes.name")}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <select
              className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              onChange={(value) => setPlaceId(delve(value, "target.value"))}
            >
              <option value="">
                {placeId ? "Clear filter" : placeText || "Select a place"}
              </option>
              {places &&
                places.map((place, index) => (
                  <option
                    key={`placeOption-${index}`}
                    value={delve(place, "attributes.id")}
                  >
                    {delve(place, "attributes.name")}
                  </option>
                ))}
            </select>
          </div>
        </div>


      </Container>
    </div>
  );
};

