import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FastMDM Person Page ",
  description: "This is FastMDM Person Page",
};


export function PersonScreen() {
  return (
    <>
      <Breadcrumb pageName="Person (Catalogue)  " />

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Administrative </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Arts & Design </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Business </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Consulting </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Engineering </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Finance & Accounting </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Information Technology </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Operations </a>
            </h4>
          </div>
        </div>

        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Product & Project Management </a>
            </h4>
          </div>
        </div>
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="p-4">
            <h4 className=" text-xl font-semibold text-black hover:text-primary dark:text-white dark:hover:text-primary">
              <a href="#"> Research & Science </a>
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
