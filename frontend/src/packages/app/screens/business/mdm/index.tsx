import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from 'app/utils/localization'

import { useLegalList } from "app/hooks/use-legal-list";   
import { setAccessToken } from "app/lib/access-token"; 

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";

export function CompanyScreen() {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));

  return (
    <>
      <Breadcrumb pageName="Master data requests (Companies &amp; Individuals)" />

      <div className="flex flex-row gap-7.5  " >
        <div className="basis-1/4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Request:

          </label>
          <div >
            <div>
                <label >Number:</label>
                <textarea rows={1} placeholder="Enter request number"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              From: <input  aria-label="From" type="date" /><br/>
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              To: <input aria-label="To" type="date" />
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              Status: 
              <select name="cars" id="cars">
                <option value="Created">Created</option>
                <option value="InWork">InWork</option>
                <option value="Done">Done</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              Initiator: 
              <select name="initiator" id="initiator">
                <option value="Naimur Rahman">Naimur Rahman</option>
                <option value="Musharof Chy">Musharof Chy</option>
                <option value="Shafiq Hammad">Shafiq Hammad</option>
              </select>
            </div>
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
            Counterparty:
          </label>
          <div>
            <div>
                <label>Short name:</label>
                <textarea rows={1} placeholder="Enter short name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Full name:</label>
                <textarea rows={1} placeholder="Enter full name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>INN:</label>
                <textarea rows={1} placeholder="Enter INN"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>OKP:</label>
                <textarea rows={1} placeholder="Enter OKP"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>OGRN:</label>
                <textarea rows={1} placeholder="Enter OGRN"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>OKVED:</label>
                <textarea rows={1} placeholder="Enter OKVED"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>OKTMO:</label>
                <textarea rows={1} placeholder="Enter OKTMO"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              Form type: 
              <select name="formtype" id="formtype">
                <option value="Legal">Legal</option>
                <option value="Individual">Individual</option>
              </select>
            </div>
            <div className="py-1 flex flex-nowrap gap-2">
              Org type: 
              <select name="initiator" id="orgtype">
                <option value="Main office">Main office</option>
                <option value="Branch">Branch</option>
              </select>
            </div>

          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Contacts:
          </label>
          <div>
            <div>
                <label>Last name:</label>
                <textarea rows={1} placeholder="Enter last name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>First name:</label>
                <textarea rows={1} placeholder="Enter first name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Middle name:</label>
                <textarea rows={1} placeholder="Enter middle name"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Phone:</label>
                <textarea rows={1} placeholder="Enter phone"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Email:</label>
                <textarea rows={1} placeholder="Enter email"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
          </div>
          <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
              Bank:
          </label>
          <div>
            <div>
                <label>Account:</label>
                <textarea rows={1} placeholder="Enter bank account"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>BIK:</label>
                <textarea rows={1} placeholder="Enter bank BIK"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Address:</label>
                <textarea rows={1} placeholder="Enter bank address"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
            <div>
                <label>Post address:</label>
                <textarea rows={1} placeholder="Enter bank post address"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white       mb-3 block text-sm font-medium "
                ></textarea>
            </div>
          </div>
          <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary p-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
              Apply
          </a>
        </div>

        <div className="basis-3/4 ">
          <div className="s-3 grid grid-cols-1 gap-4">

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

                <div className="grid grid-cols-6 gap-4 text-black dark:text-white">
                  <div className="font-bold">Number</div>
                  <div className="font-bold">Date</div>
                  <div className="font-bold">Business name</div>
                  <div className="font-bold">Status</div>
                  <div className="font-bold">Similar</div>
                  <div></div>

                  <div>10</div>
                  <div>2024-07-01</div>
                  <div>ActiveDiner</div>
                  <div>Created</div>
                  <div>1</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/10/ActiveDiner" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>11</div>
                  <div>2024-07-01</div>
                  <div>Allen's Pub and Restaurant </div>
                  <div>In Work</div>
                  <div>1</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/11/Allen%27s%20Pub%20and%20Restaurant" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>12</div>
                  <div>2024-07-01</div>
                  <div>Atlanta Bread Company </div>
                  <div>Done</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/12/Atlanta%20Bread%20Company" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>13</div>
                  <div>2024-07-01</div>
                  <div>Back Yard Burgers </div>
                  <div>Rejected</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/13/Back%20Yard%20Burgers" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>14</div>
                  <div>2024-07-01</div>
                  <div>Baja Fresh</div>
                  <div>Created</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/14/Baja%20Fresh" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>15</div>
                  <div>2024-07-01</div>
                  <div>BeaverTails</div>
                  <div>In Work</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/15/BeaverTails" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>16</div>
                  <div>2024-07-01</div>
                  <div>Benihana</div>
                  <div>Done</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/16/Benihana" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>17</div>
                  <div>2024-07-01</div>
                  <div>Bennigan's</div>
                  <div>Rejected</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/17/Bennigan%27s" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>18</div>
                  <div>2024-07-01</div>
                  <div>Bertucci's</div>
                  <div>Created</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/18/Bertucci%27s" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
                  </div>

                  <div>19</div>
                  <div>2024-07-01</div>
                  <div>Big Boy International</div>
                  <div>In Work</div>
                  <div>0</div>
                  <div>
                    <div className="bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
                      <Link href="/business/mdm/19/Big%20Boy%20International" >
                          <i className="fa-solid fa-check"></i> &nbsp;
                          Process
                      </Link>
                    </div>
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
