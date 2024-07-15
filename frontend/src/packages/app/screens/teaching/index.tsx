import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";

export function TeachingScreen() {
  return (
    <>
      <Breadcrumb pageName="Teaching" />

      <div className="rounded-sm bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
          <form>
            <label className="mb-3 mt-3 block text-sm font-bold text-black dark:text-white">
              Teach the knowledge base. Please choose the best solution for questions. Try to choose only one solution.
            </label>

            <div>
              <h2 className="flex flex-wrap gap-2 mb-9 text-2xl font-bold text-black dark:text-white ">
                Question 1. Why does our science lag behind other countries?
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-up"></i> &nbsp; I'm interested
                  </Link>
                </div>
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-down"></i> &nbsp; I'm not interested
                  </Link>
                </div>
              </h2>

              <div>
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox01" value="Solution #1." /></span> &nbsp; Using economic instruments for sustainable development </p>
                <p>Utilizing the potential of economic and financial instruments to make capital work for the environment and sustainability rather than against it.</p>
                <p>Economic instruments (usually taxes and charges) are used to achieve specific and sustainable local, national and international development goals. There is scope for appropriate economic instruments, including market mechanisms, to be used to meet the objectives of sustainable development and fulfilment of basic needs. Their effective use can be explored by governments, in cooperation with business and industry, as appropriate.</p>
                <p>Integrating environmental considerations into sectoral policies requires proper pricing of environmental resources and internalization of environmental costs. Market-based instruments cannot, however, entirely replace direct regulations and administrative interventions in environmental policy. They have to be linked to and supplement clearly defined standards on emissions and environmental quality insofar as the existing legal framework is not sufficient. </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Inadequate research and development capacity</p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox02" value="Solution #2." /></span> &nbsp; Assisting coastal and island states to expand marine research capabilities </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Inadequate research and development capacity</p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox03" value="Solution #3." /></span> &nbsp; Enhancing scientific and technological research  </p>
                <p>Scientific experimentation and technological applications for more effective means of creating material progress. </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Inadequate research and development capacity</p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox04" value="Solution #4." /></span> &nbsp; Coordinating production research and development  </p>
                <p>Assimilating data and articulating global needs. The effect is global interdependent economic network.  </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Inadequate research and development capacity</p> 
              </div>

              <div className="pt-7">
                <span className="font-bold  text-black dark:text-white"> <CheckboxTwo id="checkbox05" value="New solution." /> </span> 
                <div className="">
                                        
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the solution title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the solution description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the reason title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the reason description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                </div>
              </div>

              <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  <i className="fa fa-angles-right"></i>
                  Next
              </a>

            </div>

            <div>
              <h2 className="pt-7 flex flex-wrap gap-2 mb-9 text-2xl font-bold text-black dark:text-white ">
                Question 2. How to increase citizen activity?
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-up"></i> &nbsp; I'm interested
                  </Link>
                </div>
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-down"></i> &nbsp; I'm not interested
                  </Link>
                </div>
              </h2>

              <div>
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox01" value="Solution #1." /></span> &nbsp; Using political apathy </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Political apathy</p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox02" value="Solution #2." /></span> &nbsp; Using political pressure  </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Political apathy  </p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox03" value="Solution #3." /></span> &nbsp; Using consensus politics  </p>
                <p>Consensus politics, the advocacy of programmes and laws, as in legislative bodies, that are moderately stated in order to attract support across party lines, but which may have little or no origination or support at the electorate level.  </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Political apathy  </p> 
              </div>

              <div className="pt-7">
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox04" value="Solution #4." /></span> &nbsp; Using political expediency </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> Political apathy </p> 
              </div>

              <div className="pt-7">
                <span className="font-bold  text-black dark:text-white"> <CheckboxTwo id="checkbox05" value="New solution." /> </span> 
                <div className="">
                                        
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the solution title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the solution description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the reason title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the reason description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                </div>
              </div>

              <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  <i className="fa fa-angles-right"></i>
                  Next
              </a>


            </div>

            <div>
              <h2 className="pt-7 flex flex-wrap gap-2 mb-9 text-2xl font-bold text-black dark:text-white ">
                Question 3. How to increase fundraising?
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-up"></i> &nbsp; I'm interested
                  </Link>
                </div>
                <div className="bg-gray inline-flex items-center justify-center rounded-md px-4 py-1 text-center font-medium text-xs">
                  <Link href="#" >
                    <i className="fa-regular fa-thumbs-down"></i> &nbsp; I'm not interested
                  </Link>
                </div>
              </h2>

              <div>
                <p className="flex flex-wrap"><span className="font-bold  text-black dark:text-white"><CheckboxTwo id="checkbox01" value="Solution #1." /></span> &nbsp; The fundraising activities participation should be included in the organization privacy practices note. </p>
                <p><span className="font-bold  text-black dark:text-white">Reason #1.</span> The fundraising activities participation is not included in the organization privacy practices note. </p> 
              </div>

              <div className="pt-7">
                <span className="font-bold  text-black dark:text-white"> <CheckboxTwo id="checkbox05" value="New solution." /> </span> 
                <div className="">
                                        
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the solution title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Solution description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the solution description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason title:
                  </label>
                  <textarea
                      rows={1}
                      placeholder="Enter the reason title"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Reason description:
                  </label>
                  <textarea
                      rows={3}
                      placeholder="Enter the reason description"
                      className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                  ></textarea>
              
                </div>
              </div>

              <a className="inline-flex cursor-pointer rounded-lg items-center justify-center gap-2.5 bg-primary px-2 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                  <i className="fa fa-angles-right"></i>
                  Next
              </a>


            </div>


          </form>
      </div>
    </>

  )
}
