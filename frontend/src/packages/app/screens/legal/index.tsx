import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from '../../utils/localization'

import { useLegalList } from "app/hooks/use-legal-list";   
import { setAccessToken } from "app/lib/access-token"; 

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";

export function LegalScreen() {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));

  return (
    <>
      <Breadcrumb pageName="Legal entities" />

      <div className="flex flex-row gap-7.5  " >
        <div className="basis-1/4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Dishes:
          </label>
          <div>
              <CheckboxTwo id="checkbox-dishes-1" value="Burger" />
              <CheckboxTwo id="checkbox-dishes-2" value="Ice cream" />
              <CheckboxTwo id="checkbox-dishes-3" value="Salad" />
              <CheckboxTwo id="checkbox-dishes-4" value="Latte" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Cusines:
          </label>
          <div>
              <CheckboxTwo id="checkbox-cusines-1" value="European" />
              <CheckboxTwo id="checkbox-cusines-2" value="Japanese" />
              <CheckboxTwo id="checkbox-cusines-3" value="American" />
              <CheckboxTwo id="checkbox-cusines-4" value="Italian" />
              <CheckboxTwo id="checkbox-cusines-5" value="Asian" />
              <CheckboxTwo id="checkbox-cusines-6" value="Chinese" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Features:
          </label>
          <div>
              <CheckboxTwo id="checkbox-feature-1" value="Food delivery" />
              <CheckboxTwo id="checkbox-feature-2" value="LunchLive music" />
              <CheckboxTwo id="checkbox-feature-3" value="Wine list" />
              <CheckboxTwo id="checkbox-feature-4" value="Wedding" />
              <CheckboxTwo id="checkbox-feature-5" value="Takeaway" />
              <CheckboxTwo id="checkbox-feature-6" value="Romantic atmosphere" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Types:
          </label>
          <div>
              <CheckboxTwo id="checkbox-types-1" value="Restaurant" />
              <CheckboxTwo id="checkbox-types-2" value="Cafe" />
              <CheckboxTwo id="checkbox-types-3" value="Fast food" />
              <CheckboxTwo id="checkbox-types-4" value="Cafeteria" />
              <CheckboxTwo id="checkbox-types-5" value="Pizzeria" />
              <CheckboxTwo id="checkbox-types-6" value="Club" />
              <CheckboxTwo id="checkbox-types-7" value="BBQ" />
              <CheckboxTwo id="checkbox-types-8" value="Steakhouse" />
              <CheckboxTwo id="checkbox-types-9" value="Pub & bar" />
          </div>
        </div>

        <div className="basis-3/4 ">
          <div className="s-3 grid grid-cols-2 gap-4">

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">ActiveDiner </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.activediner.com
                </div>
                <div className="text-sm">
                  Guide to restaurants across the US. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                  <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 2.8k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Allen's Pub and Restaurant </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.allens.to
                </div>
                <div className="text-sm">
                  Traditional Irish pub. Site includes Celtic resources, home movies, and links to Northern Ireland and the Republic of Ireland. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 1.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Atlanta Bread Company </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.atlantabread.com
                </div>
                <div className="text-sm">
                  Offer fresh baked bread. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Back Yard Burgers </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.backyardburgers.com
                </div>
                <div className="text-sm">
                  Quick-service restaurant featuring charbroiled hamburgers and chicken sandwiches, salads, chili, hand-dipped milkshakes, and more. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    Baja Fresh 
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.bajafresh.com
                </div>
                <div className="text-sm">
                  Healthy Mexican-style food. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 1.8k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    BeaverTails
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.beavertailsinc.com
                </div>
                <div className="text-sm">
                  Specialty pastry served hot with a variety of toppings. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 1.7k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    Benihana
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.benihana.com
                </div>
                <div className="text-sm">
                  Features Japanese cuisine and live chef entertainment with traditional atmosphere and restaurant experiences such as sushi, teppanyaki, hibachi, and grill. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 4.1k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    Bennigan's
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.bennigans.com
                </div>
                <div className="text-sm">
                  Includes location finder, history, menu, and more. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 1.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    Bertucci's
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://www.bertuccis.com
                </div>
                <div className="text-sm">
                  Classic Italian brick oven pizzeria. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 1.8k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#"> 
                    Big Boy International
                  </a>
                </h4>
                <div className="text-primary hover:underline">
                  http://bigboy.com
                </div>
                <div className="text-sm">
                  Home of Bob's Big Boy. 
                </div>
                <div className="text-xs flex gap-2  text-black mt-2">
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <CheckboxTwo id="checkbox21" value="Compare" />
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium">
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa fa-star  text-meta-8"></i>
                    <i className="fa-regular fa-star  text-meta-8"></i>
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-black">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                </div>
              </div>
          </div>

          <a className="block px-4 pt-4 text-center" href="#">
            more
          </a>
        </div>
      </div>





    </>
  )
}
