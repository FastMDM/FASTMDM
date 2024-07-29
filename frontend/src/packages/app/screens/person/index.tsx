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

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-01-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Cody Fisher</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>100 views, 3 months ago</p>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-02-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Jenny Wilson</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>200 views, 4 months ago</p>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-03-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Henry Dholi</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>300 views, 5 months ago</p>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-04-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Mariya Desoja</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>400 views, 6 months ago</p>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-06-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Danish Heilium</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>250 views, 1 months ago</p>
              </div>
            </div>

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-center ">
              <div>
                <a className=" px-4 pt-4 flex justify-center " href="#">
                  <Image src={"/images/user/user-09-big.png"} alt="User" width={200} height={200} />
                </a>
              </div>
              <div className="border-b border-stroke p-5 px-7.5 dark:border-strokedark">
                <h4 className="text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Jackie Sanders</a>
                </h4>
              </div>
              <div className="px-7.5 pb-9 pt-6">
                <p>150 views, 2 months ago</p>
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
