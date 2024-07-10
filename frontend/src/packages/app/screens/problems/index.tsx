import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import { Metadata } from "next";

import * as React from "react";
import { useState } from "react";

export const metadata: Metadata = {
    title: "FastMDM Problem Solving",
    description: "This is FastMDM Problem Solving",
};

type ProblemScreenProps = {
    tabNumber?: number;

};
      
export function ProblemScreen({tabNumber}: ProblemScreenProps) {
    const [getTabNumber, setTabNumber] = useState(tabNumber?? 1);
    const [getDescribeValue, setDescribeValue] = useState("car won't start");

    // setTabNumber (tabNumber?? 1);

    return (
        <>
            <Breadcrumb pageName="Problems" />

            <div className="rounded-sm bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
                <form>
                    <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                        Describe the problem
                    </h2>
                    <div className="flex flex-wrap mb-2.5">
                        <input
                            type="input"
                            onChange={event => setDescribeValue(event.target.value)}
                            placeholder="Enter your message"
                            className="inline-flex basis-3/4 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            value={getDescribeValue} />

                        <a className="inline-flex basis-1/4 cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                            <i className="fa fa-search"></i>
                            Send message
                        </a>

                    </div>

                    <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                        Clarifying questions
                    </h2>
                    <div className="s-3 grid grid-cols-3 gap-4">
                        <div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Enter the label on the valve
                                </label>
                                <textarea
                                    rows={1}
                                    placeholder="Enter the label on the valve"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                ></textarea>
                            </div>
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
                                Filter by problem base:
                            </label>
                            <div>
                                <CheckboxTwo id="checkbox01" value="fuel supply problems" />
                                <CheckboxTwo id="checkbox02" value="electrical problems" />
                                <CheckboxTwo id="checkbox03" value="mechanical problems" />
                            </div>
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
                                Filter by expert/knowledge base:
                            </label>

                            <div>
                                <CheckboxTwo id="checkbox11" value="Ann Williams" />
                                <CheckboxTwo id="checkbox12" value="HIPAA expertise" />
                                <CheckboxTwo id="checkbox13" value="COBIT specialist" />
                                <CheckboxTwo id="checkbox14" value="Daniel Jobs" />
                                <CheckboxTwo id="checkbox15" value="Mary Stone" />
                                <CheckboxTwo id="checkbox16" value="Ansrew Williams" />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Enter the date when the valve broke
                                </label>
                                <textarea
                                    rows={1}
                                    placeholder="Enter the date when the valve broke"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                ></textarea>
                            </div>
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
                                No fuel pressure in the rail:
                            </label>
                            <div>
                                <CheckboxTwo id="checkbox31" value="fuel lines are clogged" />
                                <CheckboxTwo id="checkbox32" value="fuel pump faulty" />
                                <CheckboxTwo id="checkbox33" value="fuel filter clogged" />
                                <CheckboxTwo id="checkbox34" value="Fuel pressure regulator is faulty" />
                            </div>
                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Enter the number of broken teeth
                                </label>
                                <textarea
                                    rows={1}
                                    placeholder="Enter the number of broken teeth"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                ></textarea>
                            </div>
                        </div>
                        <div>
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
                                On a lift or platform, check the connections, are there any kinks in the fuel hose?
                            </label>
                            <div>
                                <CheckboxTwo id="checkbox41" value="no" />
                                <CheckboxTwo id="checkbox42" value="slight bend" />
                                <CheckboxTwo id="checkbox43" value="there is some wear" />
                                <CheckboxTwo id="checkbox44" value="there is damage" />
                            </div>

                        </div>
                    </div>

                </form>
            </div>
            <br />
            <div className="rounded-sm bordegrid bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">

                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${getTabNumber == 1 ? "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `} href="/ps/solve/123"
                        onClick={() => {
                            setTabNumber(1);
                        }}
                    >Knowledge base solutions (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${getTabNumber == 2 ? "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `} href="/ps/recommend/123"
                        onClick={() => {
                            setTabNumber(2);
                        }}
                    >Recommendations (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${getTabNumber == 3 ? "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `} href="/ps/comments/123"
                        onClick={() => {
                            setTabNumber(3);
                        }}
                    >Comments (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${getTabNumber == 4 ? "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `} href="/ps/same/123"
                        onClick={() => {
                            setTabNumber(4);
                        }}
                    >Same problem (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${getTabNumber == 5 ? "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `} href="/ps/similar/123"
                        onClick={() => {
                            setTabNumber(5);
                        }}
                    >Similar problems (40)</a>
                </div>
                <div>
                    <div className={` ${getTabNumber == 1 ? "block" : "hidden"} `}>
                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Activate the battery electrolyte.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-meta-3 px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Best solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 25 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (5) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(3) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a6.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Ann Williams
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 3++&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    After disconnecting the terminals from the battery, carefully clean the terminals and firmly tighten the fastening bolts.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-primary px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 23 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (6) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(9) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a5.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Daniel Jobs
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 350 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 4-&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    It is urgent to buy and install a new air filter, since its absence is fraught with accelerated engine failure due to foreign particles entering the cylinders along with the air and the formation of harmful carbon deposits.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-primary px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (59) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(4) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a4.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Ray Bonson
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 1450 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 3++&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Replace old fuse links with new ones.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-red px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Bad solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (59) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(4) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a3.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Mary Stone
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 450 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 2&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    The starter must be repaired if its winding is intact.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-meta-6 px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    On evaluation
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (56) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(7) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a2.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Andrew Williams
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 50 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 5--&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 2 ? "block" : "hidden"} `}>


                        <div className=" text-black dark:text-white mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed ">
                            <div className="mb-7.5 gap-3 ">
                                <CheckboxTwo id="checkbox51" value="Solution #1." />The fundraising activities participation should be included in the organization privacy practices note. <b>Reason #1.</b> The fundraising activities participation is not included in the organization privacy practices note.
                            </div>
                            <div className="mb-7.5 gap-3 ">
                                <CheckboxTwo id="checkbox52" value="New solution:" />
                                <input
                                    type="input"
                                    onChange={event => setDescribeValue(event.target.value)}
                                    placeholder="Enter your message"
                                    className="inline-flex w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    value={getDescribeValue} />
                            </div>
                            <div className="mb-7.5 gap-3  ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Heading:
                                </label>
                                <input
                                    type="input"
                                    placeholder="Heading"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-7.5 gap-3  ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Description:
                                </label>
                                <input
                                    type="input"
                                    placeholder="Description"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            <label className="mb-3 ">
                                Reason for new solution:
                            </label>
                            <div className="mb-7.5 gap-3  ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Heading:
                                </label>
                                <input
                                    type="input"
                                    placeholder="Heading"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-7.5 gap-3 flex flex-row flex-wrap ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Description:
                                </label>
                                <input
                                    type="input"
                                    placeholder="Description"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>
                            <div className="mb-7.5 gap-3 ">
                                <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                                    <i className="fa fa-search"></i>
                                    Next
                                </a>
                            </div>

                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Activate the battery electrolyte.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-meta-3 px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Best solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 25 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (5) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(3) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a6.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Ann Williams
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 3++&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    After disconnecting the terminals from the battery, carefully clean the terminals and firmly tighten the fastening bolts.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-primary px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 23 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (6) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(9) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a5.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Daniel Jobs
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 350 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 4-&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    It is urgent to buy and install a new air filter, since its absence is fraught with accelerated engine failure due to foreign particles entering the cylinders along with the air and the formation of harmful carbon deposits.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-primary px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (59) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(4) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a4.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Ray Bonson
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 1450 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 3++&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Replace old fuse links with new ones.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-red px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    Bad solution
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (59) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(4) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a3.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Mary Stone
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 450 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 2&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    The starter must be repaired if its winding is intact.
                                    More details...
                                </a><br />
                                <Link href="#" className="inline-flex items-center justify-center bg-meta-6 px-10 py-1 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" >
                                    On evaluation
                                </Link> &nbsp;
                                <i className="fa fa-eye"> </i>&nbsp; 155 views&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-up"></i> (56) Like!
                                </Link>&nbsp;
                                <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                    <i className="fa fa-thumbs-down"></i>(7) Don't like!
                                </Link>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <a href="#" >
                                    <img alt="image" src="/Images/a2.jpg" className="w-10 h-10" />
                                </a>
                                <div>
                                    <a href="#">
                                        Andrew Williams
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 50 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Rating 5--&nbsp;
                                    <small className="text-muted">Was 12.06.2014 в 4:21 </small>&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add expert to filter
                                    </Link>
                                </div>
                            </div>
                            <div className="basis-1/6 mb-3 block text-sm font-medium text-black dark:text-white">
                                <div>
                                    <i className="fa fa-bolt"></i>&nbsp;
                                    <a href="#">
                                        Knowledge base HIPAA Privacy
                                    </a>&nbsp;
                                    <i className="fa fa-thumbs-up"></i> 250 Like!&nbsp;
                                    <i className="fa fa-thumbs-up"></i> Raiting 3++&nbsp;
                                    <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                        <i className="fa fancytree-ext-filter "></i> Add a knowledge base to filter
                                    </Link>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 3 ? "block" : "hidden"} `}>
                        <div>
                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a1.jpg" />
                                </a>
                                <div className="">
                                    <a href="#">
                                        Andrew Williams
                                    </a>
                                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                                    <br />
                                    <a href="#" className="text-sm"><i className="fa fa-thumbs-up"></i> &nbsp; 26 Like this!</a> &nbsp;
                                    <small className="text-muted">12.06.2014</small>
                                </div>
                            </div>

                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a2.jpg" />
                                </a>
                                <div className="">
                                    <a href="#">
                                        Andrew Williams
                                    </a>
                                    Making this the first true generator on the Internet. It uses a dictionary of.
                                    <br />
                                    <a href="#" className="text-sm"><i className="fa fa-thumbs-up"></i> &nbsp; 11 Like this!</a> &nbsp;
                                    <small className="">10.07.2014</small>
                                </div>
                            </div>

                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a3.jpg" />
                                </a>
                                <div className="">
                                    <textarea className="" placeholder="Write comment..."></textarea>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 4 ? "block" : "hidden"} `}>
                        <div>
                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a1.jpg" />
                                </a>
                                <div className="">
                                    <a href="#">
                                        Andrew Williams
                                    </a>
                                    Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.
                                    <br />
                                    <a href="#" className="text-sm"><i className="fa fa-thumbs-up"></i> &nbsp; 26 Like this!</a> &nbsp;
                                    <small className="text-muted">12.06.2014</small>
                                </div>
                            </div>

                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a2.jpg" />
                                </a>
                                <div className="">
                                    <a href="#">
                                        Andrew Williams
                                    </a>
                                    Making this the first true generator on the Internet. It uses a dictionary of.
                                    <br />
                                    <a href="#" className="text-sm"><i className="fa fa-thumbs-up"></i> &nbsp; 11 Like this!</a> &nbsp;
                                    <small className="">10.07.2014</small>
                                </div>
                            </div>

                            <div className="s-3 flex flex-row gap-4">
                                <a href="" className="w-10 h-10">
                                    <img alt="image" src="/Images/a3.jpg" />
                                </a>
                                <div className="">
                                    <textarea className="" placeholder="Write comment..."></textarea>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 5 ? "block" : "hidden"} `}>
                        5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

                        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-3">


                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Stopped turning on altogether
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        The BIOS is password protected, but I don’t remember the password
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Lenovo g580 won't turn on
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        I forgot my administrator password
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Keyboard problem
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Headphone microphone doesn't work
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Laptop can't see TV via HDMI
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        Factory software
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-sm">
                                <a href="/ru/ru/AppViews/Article" className="">
                                    <span className=" mb-9 text-2xl font-bold  hover:text-primary dark:hover:text-primary  text-black dark:text-white ">
                                        HDMI output disappeared when upgrading to Windows 10
                                    </span>
                                </a>
                                <div className="pb-2 pt-6 font-bold">
                                    <strong>Clarifying questions:</strong>&nbsp;
                                    <span className="text-muted">
                                        <i className="fa-regular fa-clock"></i> 11th May 2015
                                    </span>
                                </div>
                                <p className="pb-2">Enter the date when the valve broke? - 05.06.2013 </p>
                                <p className="pb-2">Does the fuel pump work when connected directly to the engine? - Yes</p>
                                <p className="pb-2">On a lift or platform, check the connections to see if there are any kinks in the fuel hose? - There is damage.</p>
                                <div className="pb-2 grid grid-cols-2 ">
                                    <div className="text-left">
                                        <div><i className="fa-regular fa-comments"></i>56 commants </div>
                                        <div><i className="fa-regular fa-eye"> </i>144 views</div>
                                    </div>
                                    <div className="text-right">
                                        <div><i className="fa-regular fa-address-book"> </i> 98 same problem</div>
                                        <div><i className="fa-regular fa-paper-plane"> </i> 7 solutions</div>
                                    </div>
                                </div>
                            </div>



                            

                            </div>

                    </div>
                </div>
            </div>
            <br />
            <div className="rounded-sm bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
                <div className="s-3 grid grid-cols-2 gap-4">
                    <div className="flex justify-center gap-2 text-sm font-medium">

                        <i className="fa fa-share"></i> Share:
                        <i className="fa-brands fa-adn"></i>
                        <i className="fa-brands fa-bitbucket"></i>
                        <i className="fa-brands fa-bitbucket"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-flickr"></i>
                        <i className="fa-brands fa-foursquare"></i>
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-windows"></i>
                        <i className="fa-brands fa-odnoklassniki"></i>
                        <i className="fa-brands fa-openid"></i>
                        <i className="fa-brands fa-pinterest"></i>
                        <i className="fa-brands fa-reddit"></i>
                        <i className="fa-brands fa-soundcloud"></i>
                        <i className="fa-brands fa-tumblr"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-vimeo-square"></i>
                        <i className="fa-brands fa-vk"></i>
                        <i className="fa-brands fa-yahoo"></i>


                    </div>
                    <div>
                        <div className="flex justify-center gap-2 text-sm font-medium">


                            <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                <i className="fa-regular fa-comments"></i> I have the same problem
                            </Link>
                            <Link href="#" className="inline-flex items-center justify-center rounded-md gap-2.5 border border-black dark:border-white px-4 py-1 text-center font-medium  ">
                                <i className="fa-regular fa-comments"></i> Subscribe
                            </Link>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
