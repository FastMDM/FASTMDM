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

export function ProductScreen() {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));

  return (
    <>
      <Breadcrumb pageName="Product (List and Filter)" />

      <div className="flex flex-row gap-7.5  " >
        <div className="basis-1/4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Color:
          </label>
          <div>
              <CheckboxTwo id="checkbox-dishes-1" value="Gray" />
              <CheckboxTwo id="checkbox-dishes-2" value="Blue" />
              <CheckboxTwo id="checkbox-dishes-3" value="Beige" />
              <CheckboxTwo id="checkbox-dishes-4" value="Black" />
              <CheckboxTwo id="checkbox-dishes-4" value="Brown" />
              <CheckboxTwo id="checkbox-dishes-4" value="White" />
              <CheckboxTwo id="checkbox-dishes-4" value="Green" />
              <CheckboxTwo id="checkbox-dishes-4" value="Red" />
              <CheckboxTwo id="checkbox-dishes-4" value="Pink" />
              <CheckboxTwo id="checkbox-dishes-4" value="Purple" />
              <CheckboxTwo id="checkbox-dishes-4" value="Blue" />
              <CheckboxTwo id="checkbox-dishes-4" value="Orange" />
              <CheckboxTwo id="checkbox-dishes-4" value="Yellow " />
          </div>
          <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Cost:
              </label>
              from &nbsp;
              <input placeholder="from" className="w-15 rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white" />
              &nbsp; to &nbsp;
              <input placeholder="to" className="w-15 rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white" />             
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Seller:
          </label>
          <div>
              <CheckboxTwo id="checkbox-cusines-1" value="All" />
              <CheckboxTwo id="checkbox-cusines-2" value="Individuals" />
              <CheckboxTwo id="checkbox-cusines-3" value="Companies" />
              <CheckboxTwo id="checkbox-cusines-4" value="4 stars and more" />
          </div>
          <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Text search:
              </label>
              <input placeholder="Favorite text" className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white" />
          </div>
          <a className="mt-3 inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary p-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
              Apply
          </a>
        </div>

        <div className="basis-3/4 ">
          <div className="s-3 grid grid-cols-2 gap-4">

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <a className="block px-4 pt-4" href="#">
                <Image src={"/images/diagnostics/d-04.png"} alt="User" width={432} height={238} />
              </a>
              <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">HIPAA Security Gap Analysis</a>
                </h4>
                <p>Protect Patient Health Information.</p>
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

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <a className="block px-4 pt-4" href="#">
                <Image src={"/images/diagnostics/d-05.jpg"} alt="User" width={432} height={238} />
              </a>
              <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Thomas test</a>
                </h4>
                <p>Types of behavior in conflict.</p>
              </div>
              <div className="flex items-center gap-3 p-4 ">
                <div className="h-10 w-10 rounded-full">
                  <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
                  <p className="text-sm">200 views, 3 months ago</p>
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <a className="block px-4 pt-4" href="#">
                <Image src={"/images/diagnostics/d-06.jpg"} alt="User" width={432} height={238} />
              </a>
              <div className="p-6">
                <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Boyko test</a>
                </h4>
                <p>Methodology for diagnosing the dominant strategy of psychological defense in communication V. V. Boyko.</p>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full">
                  <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
                  <p className="text-sm">300 views, 3 months ago</p>
                </div>
              </div>
            </div>

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

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <a className="block px-4 pt-4" href="#">
                <Image src={"/images/diagnostics/d-08.png"} alt="User" width={432} height={238} />
              </a>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Holmes and Rahe's questionnaire</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>Holmes and Rahe's method for determining stress resistance and social adaptation.</p>
              </div>
              <div className="flex items-center gap-3 p-4 ">
                <div className="h-10 w-10 rounded-full">
                  <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
                  <p className="text-sm">200 views, 3 months ago</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <a className="block px-4 pt-4" href="#">
                <Image src={"/images/diagnostics/d-09.jpg"} alt="User" width={432} height={238} />
              </a>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Beck Depression Inventory 2</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>he BDI is widely used as an assessment tool by health care professionals and researchers in a variety of settings.</p>
              </div>
              <div className="flex items-center gap-3 p-4">
                <div className="h-10 w-10 rounded-full">
                  <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
                </div>
                <div>
                  <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
                  <p className="text-sm">300 views, 3 months ago</p>
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
