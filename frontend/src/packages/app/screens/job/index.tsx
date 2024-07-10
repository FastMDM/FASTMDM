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

export function JobScreen() {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));

  return (
    <>
      <Breadcrumb pageName="Jobs" />

      <div className="flex flex-row gap-7.5  " >

        <div className="basis-1/4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

        <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Specialization:
          </label>
          <div>
              <CheckboxTwo id="checkbox-dishes-1" value="Car business" />
              <CheckboxTwo id="checkbox-dishes-2" value="Administrative staff" />
              <CheckboxTwo id="checkbox-dishes-3" value="Safety" />
              <CheckboxTwo id="checkbox-dishes-4" value="Top and middle management" />
              <CheckboxTwo id="checkbox-dishes-4" value="Information Technology" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Company industry:
          </label>
          <div>
              <CheckboxTwo id="checkbox-dishes-1" value="Car business" />
              <CheckboxTwo id="checkbox-dishes-2" value="Hotels, restaurants, catering, catering" />
              <CheckboxTwo id="checkbox-dishes-3" value="State organizations" />
              <CheckboxTwo id="checkbox-dishes-4" value="Extractive industry" />
          </div>
          <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Income level:
              </label>
              <textarea
                  rows={1}
                  placeholder="Enter the income level"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
              ></textarea>
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Required work experience:
          </label>
          <div>
              <CheckboxTwo id="checkbox-cusines-1" value="Doesn't matter" />
              <CheckboxTwo id="checkbox-cusines-2" value="No experience" />
              <CheckboxTwo id="checkbox-cusines-3" value="From 1 year to 3 years" />
              <CheckboxTwo id="checkbox-cusines-4" value="From 3 to 6 years" />
              <CheckboxTwo id="checkbox-cusines-5" value="More than 6 years" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Employment type:
          </label>
          <div>
              <CheckboxTwo id="checkbox-feature-1" value="Full employment" />
              <CheckboxTwo id="checkbox-feature-2" value="Part-time employment" />
              <CheckboxTwo id="checkbox-feature-3" value="Project work/one-time assignment" />
              <CheckboxTwo id="checkbox-feature-4" value="Volunteering" />
              <CheckboxTwo id="checkbox-feature-5" value="Internship" />
              <CheckboxTwo id="checkbox-feature-6" value="Registration under GPC or part-time" />
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Schedule:
          </label>
          <div>
              <CheckboxTwo id="checkbox-types-1" value="Full day" />
              <CheckboxTwo id="checkbox-types-2" value="Shift work" />
              <CheckboxTwo id="checkbox-types-3" value="Flexible schedule" />
              <CheckboxTwo id="checkbox-types-4" value="Distant work" />
              <CheckboxTwo id="checkbox-types-5" value="Shift method" />
          </div>
          <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary p-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
              Apply
          </a>
        </div>

        <div className="basis-3/4 ">
          <div className="s-3 grid grid-cols-2 gap-4">

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Head of IT infrastructure and IT services</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $2500 to $3000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">100 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Head of Platform Development</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $3100 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">200 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
                </div>
                <a className="text-meta-3 border-meta-3 border text-xs bg-gray inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5  px-1 py-1 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  Be the first to apply
                </a>
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
                    &nbsp; 2.0k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Team Lead (software development/implementation)</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $4500 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">300 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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
                    &nbsp; 1.8k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Team lead of the analytical system development project</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $3000 to $4000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">100 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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
                    &nbsp; 1.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">CTO</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $5000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      more than 6 years
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">200 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
                </div>
                <a className="text-meta-3 border-meta-3 border text-xs bg-gray inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5  px-1 py-1 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  Be the first to apply
                </a>
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
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">IT Project Manager</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    to $4000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      more than 6 years
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">300 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
                </div>
                <a className="text-meta-3 border-meta-3 border text-xs bg-gray inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5  px-1 py-1 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  Be the first to apply
                </a>
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
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>


                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Head of Project Management/Software Product Implementation Department</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $3000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">100 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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
                    &nbsp; 2.5k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>

                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>


                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Technical Manager for the Cloud Infrastructure Team</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $5000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      more than 6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">200 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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
                    &nbsp; 2.4k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">Software development project manager</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $3000 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      more than 6 years
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">300 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
                </div>
                <a className="text-meta-3 border-meta-3 border text-xs bg-gray inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5  px-1 py-1 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  Be the first to apply
                </a>
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
                    &nbsp; 3.2k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                </div>
              </div>

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
                <h4 className="mb-2 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
                  <a href="#">IT Director</a>
                </h4>
                <div className="text-xs flex flex-wrap gap-2  text-black mt-2">
                  <div className="inline-flex items-center justify-center rounded-md py-1 font-medium ">
                    from $4500 gross
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                      experience 3–6 years 
                    </Link>
                  </div>  
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="h-10 w-10 rounded-full">
                    <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
                  </div>
                  <div className=" gap-2">

                    <div className=" inline-flex gap-2.5 ">
                      <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
                      <Link className="text-xs text-meta-3 bg-gray items-center justify-center rounded-md px-4 py-1 text-center font-medium" href="#" >
                        online
                      </Link>
                    </div>  
                    <p className="text-sm">100 views, 3 months ago</p>
                  </div>
                </div>
                <div className="text-sm">
                  London 
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
                    &nbsp; 4.1k
                  </div>
                  <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                    <Link href="#" >
                        <i className="fa-regular fa-heart"></i> 
                    </Link>
                  </div>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-check"></i>
                      Apply
                  </a>
                  <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 border border-primary px-2 py-2 text-center font-medium text-black hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                      <i className="fa fa-search"></i>
                      View contacts
                  </a>

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
