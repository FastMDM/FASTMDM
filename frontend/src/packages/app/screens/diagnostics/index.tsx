import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "app/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastMDM Diagnostics  ",
  description: "This is FastMDM Diagnostics",
};


export function DiagnosticsScreen() {
  return (
    <>
      <Breadcrumb pageName="Diagnostics" />

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center gap-3 px-4 py-4">
            <a href="#">
              <Image src={"/images/diagnostics/d-01.png"} alt="User" width={432} height={238} sizes="(max-width: 432px) (max-height: 238px)"/>
            </a>
          </div>
          <div className="p-4">
            <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#">HIPAA Express Privacy Audit</a>
            </h4>
            <p>Identify potential vulnerabilities and areas of non-compliance within an organization's privacy practices.</p>
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
          <div className="flex items-center gap-3 px-4 py-4">
            <a href="#">
              <Image src={"/images/diagnostics/d-02.png"} alt="User" width={432} height={238} sizes="(max-width: 432px) (max-height: 238px)" />
            </a>
          </div>
          <div className="p-4">
            <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#">HIPAA Express Security Audit</a>
            </h4>
            <p>Identify potential vulnerabilities and areas of non-compliance within an organization's security practices.</p>
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
          <div className="flex items-center gap-3 px-4 py-4">
            <a href="#">
              <Image src={"/images/diagnostics/d-03.png"} alt="User" width={432} height={238} sizes="(max-width: 432px) (max-height: 238px)" />
            </a>
          </div>
          <div className="p-4">
            <h4 className="mb-3 text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#">HIPAA Privacy Gap Analysis</a>
            </h4>
            <p>Compliance with the HIPAA Security Rule, rather than assessing the potential risks to the data.</p>
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

      <br/>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">

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




    </>
  )
}
