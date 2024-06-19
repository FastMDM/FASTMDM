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


export function ProblemSolvingScreen() {
    const [getTabNumber, setTabNumber] = useState(1);
    const [getDescribeValue, setDescribeValue] = useState("car won't start");

    return (
        <>
            <Breadcrumb pageName="Problem solving" />

            <div className="rounded-sm border bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
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
                            value={getDescribeValue}  />

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
                                <CheckboxTwo id="checkbox01" value= "fuel supply problems"/>
                                <CheckboxTwo id="checkbox02" value= "electrical problems"/>
                                <CheckboxTwo id="checkbox03" value= "mechanical problems"/>
                            </div>  
                            <label className="mb-3 mt-3 block text-sm font-medium text-black dark:text-white">
                                Filter by expert/knowledge base:
                            </label>
                            
                            <div>
                                <CheckboxTwo id="checkbox11" value= "Ann Williams"/>
                                <CheckboxTwo id="checkbox12" value= "HIPAA expertise"/>
                                <CheckboxTwo id="checkbox13" value= "COBIT specialist"/>
                                <CheckboxTwo id="checkbox14" value= "Daniel Jobs"/>
                                <CheckboxTwo id="checkbox15" value= "Mary Stone"/>
                                <CheckboxTwo id="checkbox16" value= "Ansrew Williams"/>
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
                                <CheckboxTwo id="checkbox31" value= "fuel lines are clogged"/>
                                <CheckboxTwo id="checkbox32" value= "fuel pump faulty"/>
                                <CheckboxTwo id="checkbox33" value= "fuel filter clogged"/>
                                <CheckboxTwo id="checkbox34" value= "Fuel pressure regulator is faulty"/>
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
                                <CheckboxTwo id="checkbox41" value= "no"/>
                                <CheckboxTwo id="checkbox42" value= "slight bend"/>
                                <CheckboxTwo id="checkbox43" value= "there is some wear"/>
                                <CheckboxTwo id="checkbox44" value= "there is damage"/>
                            </div>  

                        </div>
                    </div>

                </form>
            </div>
            <br/>
            <div className="rounded-sm border bordegrid bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="mb-7.5 flex flex-wrap gap-3 border-b border-stroke pb-5 dark:border-strokedark">

                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                        getTabNumber == 1 ?  "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `}  href="#"
                        onClick={() => {
                            setTabNumber(1);
                          }}
                    >Knowledge base solutions (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                        getTabNumber == 2 ?  "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `}  href="#"
                        onClick={() => {
                            setTabNumber(2);
                          }}
                    >Recommendations (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                        getTabNumber == 3 ?  "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `}  href="#"
                        onClick={() => {
                            setTabNumber(3);
                          }}
                    >Comments (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                        getTabNumber == 4 ?  "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `}  href="#"
                        onClick={() => {
                            setTabNumber(4);
                          }}
                    >Same problem (40)</a>
                    <a className={`rounded-md px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white dark:hover:bg-primary md:text-base lg:px-6 ${
                        getTabNumber == 5 ?  "bg-primary text-white" : "bg-gray dark:bg-meta-4 text-black dark:text-white"} `}  href="#"
                        onClick={() => {
                            setTabNumber(5);
                          }}
                    >Similar problems (40)</a>
                </div>
                <div>
                    <div className={` ${getTabNumber == 1 ?  "block" : "hidden"} `}>
                        <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Activate the battery electrolyte.
                                    More details...
                                </a><br/>
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
                                    <img alt="image" src="/Images/a6.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a5.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a4.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a3.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a2.jpg" className="w-10 h-10"/>
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
                    <div className={`leading-relaxed ${getTabNumber == 2 ?  "block" : "hidden"} `}>
                    <div className="mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row ">
                            <div className="basis-4/6 mb-3 block text-sm font-medium text-black dark:text-white ">
                                <a href="#">
                                    Activate the battery electrolyte.
                                    More details...
                                </a><br/>
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
                                    <img alt="image" src="/Images/a6.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a5.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a4.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a3.jpg" className="w-10 h-10"/>
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
                                </a><br/>
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
                                    <img alt="image" src="/Images/a2.jpg" className="w-10 h-10"/>
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


                        <div className=" text-black dark:text-white mb-7.5 gap-3 border-b border-stroke pb-5 dark:border-strokedark leading-relaxed flex flex-row flex-wrap ">
                            <div className="mb-7.5 gap-3 flex flex-row flex-wrap ">
                                <CheckboxTwo id="checkbox51" value= "Solution #1."/>The fundraising activities participation should be included in the organization privacy practices note. <b>Reason #1.</b> The fundraising activities participation is not included in the organization privacy practices note. 
                            </div>
                            <div className="mb-7.5 gap-3 flex flex-row flex-wrap ">
                                <CheckboxTwo id="checkbox52" value= "New solution:"/>
                                <input
                                    type="input"
                                    onChange={event => setDescribeValue(event.target.value)}
                                    placeholder="Enter your message"
                                    className="inline-flex w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    value={getDescribeValue}  />

                                <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                                    <i className="fa fa-search"></i>
                                    Next
                                </a>
                            </div>
                            <div className="mb-7.5 gap-3 flex flex-row flex-wrap ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div className="mb-7.5 gap-3 flex flex-row flex-wrap ">
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>




                        </div>  




                        {/* <!-- Sign In Form --> */}
                        <div >
                            <div className="border-b border-stroke  dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Sign In Form
                            </h3>
                            </div>
                            <form action="#">
                            <div className="">
                                <div className="">
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                <div>
                                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-5.5 mt-5 flex items-center justify-between">
                                    <label htmlFor="formCheckbox" className="flex cursor-pointer">
                                        <div className="relative pt-0.5">
                                        <input
                                            type="checkbox"
                                            id="formCheckbox"
                                            className="taskCheckbox sr-only"
                                        />
                                        <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
                                            <span className="text-white opacity-0">
                                            <svg
                                                className="fill-current"
                                                width="10"
                                                height="7"
                                                viewBox="0 0 10 7"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
                                                fill=""
                                                />
                                            </svg>
                                            </span>
                                        </div>
                                        </div>
                                        <p>Remember me</p>
                                    </label>

                                    <Link href="#" className="text-sm text-primary hover:underline">
                                        Forget password?
                                    </Link>
                                </div>

                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    <i className="fa fa-search"></i> Next
                                </button>

 
                            </div>
                            </form>
                        </div>       


                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 3 ?  "block" : "hidden"} `}>
                        3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod. 
                    <br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?
                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 4 ?  "block" : "hidden"} `}>
                        4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.
                    </div>
                    <div className={`leading-relaxed ${getTabNumber == 5 ?  "block" : "hidden"} `}>
                        5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.
                    </div>
                </div>
            </div>
            <br/>
            <div className="rounded-sm border bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
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
