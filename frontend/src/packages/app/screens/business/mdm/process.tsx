import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import { useTranslation } from 'app/utils/localization'

import { useBusinessList } from "app/hooks/use-business-list";
import { setAccessToken } from "app/lib/access-token"; 

import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";
import { useRouter } from 'next/router'

export function BusinessScreen({ params }: { params: { name: string, id: string } }) {
  const { t } = useTranslation('common')
  setAccessToken ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA5NjQ0OTkzLCJleHAiOjE3MTIyMzY5OTN9.FoeVqLaXdD5vhOOg5gfsmTj0alETcxh08tjrIaQj9SY');
  const businessListState = useBusinessList();
  console.log('x1'); 
  console.log (JSON.stringify(businessListState));
  const router = useRouter()
  const id = parseInt((router.query.id as string) ?? "0", 10);
  const name = router.query.name;

  return (
    <>
      <Breadcrumb pageName="Businesses (Process master data requests)" />

      <div className="  " >
        <div className=" text-black gap-2 flex">
          <label>
            Request # {parseInt((router.query.id as string) ?? "0", 10)} to change Business: {router.query.name}
          </label>

          <div className="m-1 bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
            <Link href="/business/mdm/10/ActiveDiner" >
                Check
            </Link>
          </div>
          <div className="m-1 bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
            <Link href="/business/mdm/10/ActiveDiner" >
                Approve
            </Link>
          </div>
          <div className="m-1 bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
            <Link href="/business/mdm/10/ActiveDiner" >
                Reject
            </Link>
          </div>
          <div className="m-1 bg-meta-10 inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium ">
            <Link href="/business/mdm/10/ActiveDiner" >
                Cancel
            </Link>
          </div>
        </div>
        <div className=" text-black gap-2 flex-row">
          <label>
            Integrated systems:
          </label>

          <div className="inline-flex items-center gap-3 m-1">
            <i className="fa-regular fa-square-check"></i>
            <div className="h-10 w-10 rounded-full">
              <Image src={"/images/user/user-11.png"} alt="User" width={40} height={40} />
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">Naimur Rahman</h4>
              <p className="text-sm">100 views, 3 months ago</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 m-1">
            <i className="fa-regular fa-square-check"></i>
            <div className="h-10 w-10 rounded-full">
              <Image src={"/images/user/user-01.png"} alt="User" width={40} height={40} />
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">Musharof Chy</h4>
              <p className="text-sm">200 views, 3 months ago</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-3 m-1">
          <i className="fa-regular fa-square"></i>
            <div className="h-10 w-10 rounded-full">
              <Image src={"/images/user/user-13.png"} alt="User" width={40} height={40} />
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">Shafiq Hammad</h4>
              <p className="text-sm">300 views, 3 months ago</p>
            </div>
          </div>

        </div>
        
        <div className="mt-3">
          <div className="s-3 grid grid-cols-1 gap-4 overflow-auto">

              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">

                <div className="grid grid-cols-8 gap-4 text-black dark:text-white">
                  <div className="font-bold">Field</div>
                  <div className="font-bold">Current fields</div>
                  <div className="font-bold">Final values</div>
                  <div className="font-bold">Gold values</div>
                  <div className="font-bold">Recommended values</div>
                  <div className="font-bold">Values in request #{id}</div>
                  <div className="font-bold">Values in request #{id + 1}</div>
                  <div className="font-bold">Values in request #{id + 2}</div>

                  <div>Short name</div>
                  <div>{name}</div>
                  <div>{name}</div>
                  <div><label><input type="radio" name="01" />&nbsp;{name}-gold</label></div>
                  <div><label><input type="radio" name="01" />&nbsp;{name}</label></div>
                  <div><label><input type="radio" name="01" />&nbsp;{name}-{id}</label></div>
                  <div><label><input type="radio" name="01" />&nbsp;{name}-{id + 1}</label></div>
                  <div><label><input type="radio" name="01" />&nbsp;{name}-{id + 2}</label></div>

                  <div>Full name</div>
                  <div>{name}</div>
                  <div>{name}</div>
                  <div><label><input type="radio" name="02"/>&nbsp;{name}-gold</label></div>
                  <div><label><input type="radio" name="02"/>&nbsp;{name}</label></div>
                  <div><label><input type="radio" name="02"/>&nbsp;{name}-{id}</label></div>
                  <div><label><input type="radio" name="02"/>&nbsp;{name}-{id + 1}</label></div>
                  <div><label><input type="radio" name="02"/>&nbsp;{name}-{id + 2}</label></div>

                  <div>Middle name</div>
                  <div>{name}</div>
                  <div>{name}</div>
                  <div><label><input type="radio" name="03"/>&nbsp;{name}-gold</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{name}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{name}-{id}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{name}-{id + 1}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{name}-{id + 2}</label></div>

                  <div>Create date</div>
                  <div>{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</div>
                  <div>{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</div>
                  <div><label><input type="radio" name="03"/>&nbsp;{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;{new Date().toLocaleString("en-US", { year: "numeric", month: "2-digit", day:"2-digit" }) + ""}</label></div>

                  <div>Org type</div>
                  <div>LLP</div>
                  <div>LLP</div>
                  <div><label><input type="radio" name="03"/>&nbsp;LLP</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;PLC</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;CIC</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;RTM</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;Sole trader</label></div>

                  <div>Form type</div>
                  <div>Individual</div>
                  <div>Individual</div>
                  <div><label><input type="radio" name="03"/>&nbsp;Individual</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;Individual</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;Company</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;Company</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;Company</label></div>

                  <div>INN</div>
                  <div>{name}</div>
                  <div>{name}</div>
                  <div><label><input type="radio" name="03"/>&nbsp;5900000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;5900000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;5900000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;5900000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;5900000000</label></div>

                  <div>KPP</div>
                  <div>590000000</div>
                  <div>590000000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;590000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;590000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;590000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;590000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;590000000</label></div>

                  <div>OKPO</div>
                  <div>78000000</div>
                  <div>78000000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;78000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;78000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;78000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;78000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;78000000</label></div>

                  <div>OGRN</div>
                  <div>1000000000000</div>
                  <div>1000000000000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;1000000000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;1000000000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;1000000000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;1000000000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;1000000000000</label></div>

                  <div>OKVED</div>
                  <div>63.1</div>
                  <div>63.1</div>
                  <div><label><input type="radio" name="03"/>&nbsp;63.1</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;63.1</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;63.1</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;63.1</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;63.1</label></div>

                  <div>OKTMO</div>
                  <div>54000000</div>
                  <div>54000000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;54000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;54000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;54000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;54000000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;54000000</label></div>

                  <div>Address</div>
                  <div>UK,London, House avenue, 123</div>
                  <div>UK,London, House avenue, 123</div>
                  <div><label><input type="radio" name="03"/>&nbsp;UK,London, House avenue, 123</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;UK,London, House avenue, 123</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;UK,London, House avenue, 123</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;UK,London, House avenue, 123</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;UK,London, House avenue, 123</label></div>

                  <div>Phone</div>
                  <div>+44 00 0000 0000</div>
                  <div>+44 00 0000 0000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>

                  <div>Email</div>
                  <div>c@f.c</div>
                  <div>c@f.c</div>
                  <div><label><input type="radio" name="03"/>&nbsp;c@f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;c@f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;c@f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;c@f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;c@f.c</label></div>

                  <div>Fax</div>
                  <div>+44 00 0000 0000</div>
                  <div>+44 00 0000 0000</div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;+44 00 0000 0000</label></div>

                  <div>URL</div>
                  <div>f.c</div>
                  <div>f.c</div>
                  <div><label><input type="radio" name="03"/>&nbsp;f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;f.c</label></div>
                  <div><label><input type="radio" name="03"/>&nbsp;f.c</label></div>



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
