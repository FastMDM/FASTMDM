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

export function PersonScreen() {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));

  return (
    <>
      <Breadcrumb pageName="Person (List and Filter)" />

      <div className="flex flex-row gap-7.5  " >
        <div className="basis-1/4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Gender:
          </label>
          <div>
              <CheckboxTwo id="checkbox-gender-1" value="Male" />
              <CheckboxTwo id="checkbox-gender-2" value="Fermale" />
              <CheckboxTwo id="checkbox-gender-3" value="Other" />
          </div>
          <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Age:
              </label>
              from &nbsp;
              <input placeholder="from" className="w-15 rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white" />
              &nbsp; to &nbsp;
              <input placeholder="to" className="w-15 rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white" />             
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Gole:
          </label>
          <div>
            <CheckboxTwo id="checkbox-gole-1" value="Mail" />
            <CheckboxTwo id="checkbox-gole-2" value="Love, relationships" />
            <CheckboxTwo id="checkbox-gole-3" value="Love, creating a family" />
            <CheckboxTwo id="checkbox-gole-4" value="Friendship, communication" />
            <CheckboxTwo id="checkbox-gole-5" value="Birth, upbringing of a child" />
            <CheckboxTwo id="checkbox-gole-6" value="Flirt" />
            <CheckboxTwo id="checkbox-gole-7" value="Sports activities" />
            <CheckboxTwo id="checkbox-gole-8" value="Joint trip" />
            <CheckboxTwo id="checkbox-gole-9" value="Shared housing" />
            <CheckboxTwo id="checkbox-gole-10" value="Cooperation" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Disconnected state:
          </label>
          <div>
              <CheckboxTwo id="checkbox-feature-1" value="Online" />
              <CheckboxTwo id="checkbox-feature-2" value="Offline" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Zodiac sign:
          </label>
          <div>         
              <CheckboxTwo id="checkbox-types-1" value="Aries" />
              <CheckboxTwo id="checkbox-types-2" value="Taurus" />
              <CheckboxTwo id="checkbox-types-3" value="Gemini" />
              <CheckboxTwo id="checkbox-types-4" value="Cancer" />
              <CheckboxTwo id="checkbox-types-5" value="Leo" />
              <CheckboxTwo id="checkbox-types-6" value="Virgo" />
              <CheckboxTwo id="checkbox-types-7" value="Libra" />
              <CheckboxTwo id="checkbox-types-8" value="Scorpio" />
              <CheckboxTwo id="checkbox-types-9" value="Sagittarius" />
              <CheckboxTwo id="checkbox-types-10" value="Capricorn" />
              <CheckboxTwo id="checkbox-types-11" value="Aquarius" />
              <CheckboxTwo id="checkbox-types-12" value="Pisces" />
          </div>
          <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary p-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
              Apply
          </a>
        </div>

        <div className="basis-3/4 ">
          <div className="s-3 grid grid-cols-2 gap-4">


          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <a className="block px-4 pt-4" href="#">
            <Image src={"/images/diagnostics/d-07.png"} alt="User" width={432} height={238} />
          </a>
          <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
            <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#">Methodology for diagnosing socio-psychological adaptation by K. Rogers and R. Diamond.</a>
            </h4>
          </div>
          <div className="px-7.5 pb-9 pt-6">
            <p>Psychotherapy and Personality Change: Coordinated Research Studies in the Client-Centered Approach</p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-10 w-10 rounded-full">
              <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
              <p className="text-sm">100 views, 3 months ago</p>
            </div>
          </div>
        </div>

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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
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
