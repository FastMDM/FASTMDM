import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastMDM Business Page ",
  description: "This is FastMDM Business Page",
};


export function BusinessScreen() {
  return (
    <>
      <Breadcrumb pageName="Business (Catalogue)  " />

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Accounting </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Business and Society </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Cooperativ­es </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Customer Service </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> E-Commerce </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Education and Training </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Employment </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Human Resources </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Informatio­n Services </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Internatio­nal Business and Trade </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Investing </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Major Companies </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Management </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Marketing and Advertisin­g </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Opportunit­ies </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Small Business </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Aerospace and Defense </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Agricultur­e and Forestry </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Arts and Entertainm­ent </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Automotive </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Biotechnol­ogy and Pharmaceut­icals </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Business Services </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Chemicals </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Constructi­on and Maintenanc­e </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Consumer Goods and Services </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Electronic­s and Electrical </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Energy </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Environmen­t </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Financial Services </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Food and Related Products </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Healthcare </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Hospitalit­y </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Industrial Goods and Services </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Informatio­n Technology </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Materials </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Mining and Drilling </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Publishing and Printing </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Real Estate </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Retail Trade </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Telecommun­ications </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Textiles and Nonwovens </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Transporta­tion and Logistics </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Wholesale Trade </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Associatio­ns </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Directorie­s </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> News and Media </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Regional </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Resources </a>
            </h4>
          </div>
        </div>








      </div>
      <a className="block px-4 pt-4 text-center" href="#">
        more
      </a>




    </>
  )
}
