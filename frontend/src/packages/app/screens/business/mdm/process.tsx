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
import { useRouter } from 'next/router'

export function CompanyScreen({ params }: { params: { name: string, id: string } }) {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const legalListState = useLegalList();  
  console.log('x1'); 
  console.log (JSON.stringify(legalListState));
  const router = useRouter()


  return (
    <>
      <Breadcrumb pageName="Master data requests (Companies &amp; Individuals)" />

      <div className="flex flex-row gap-7.5  " >
 
        <div className="basis-full">
          <div className="s-3 grid grid-cols-1 gap-4">

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

                <div className="grid grid-cols-8 gap-4 text-black dark:text-white">
                  <div className="font-bold">Number</div>
                  <div className="font-bold">Current fields</div>
                  <div className="font-bold">Total values</div>
                  <div className="font-bold">Gold  values</div>
                  <div className="font-bold">Values in request {router.query.id}</div>
                  <div className="font-bold">Steward value</div>
                  <div className="font-bold">Values in request {parseInt((router.query.id as string) ?? "0", 10) + 1}</div>
                  <div className="font-bold">Values in request {parseInt((router.query.id as string) ?? "0", 10) + 2}</div>

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
