import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";

export function TeachingScreen() {
  return (
    <>
      <Breadcrumb pageName="Teaching" />

      <div className="rounded-sm bordegrid grid-colr-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
          <form>
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Please choose the best solution for questions. Try to choose only one solution.
              </h2>


              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Question 1. Why does our science lag behind other countries?
              </h2>
              <div>
                    <CheckboxTwo id="checkbox01" value="Solution #1." />
                    Using economic instruments for sustainable development 
                    Reason #1.
                    Inadequate research and development capacity
                    Utilizing the potential of economic and financial instruments to make capital work for the environment and sustainability rather than against it.

                    Economic instruments (usually taxes and charges) are used to achieve specific and sustainable local, national and international development goals. There is scope for appropriate economic instruments, including market mechanisms, to be used to meet the objectives of sustainable development and fulfilment of basic needs. Their effective use can be explored by governments, in cooperation with business and industry, as appropriate.

                    Integrating environmental considerations into sectoral policies requires proper pricing of environmental resources and internalization of environmental costs. Market-based instruments cannot, however, entirely replace direct regulations and administrative interventions in environmental policy. They have to be linked to and supplement clearly defined standards on emissions and environmental quality insofar as the existing legal framework is not sufficient. 



                    <CheckboxTwo id="checkbox02" value="Solution #2." />
                    
                    Assisting coastal and island states to expand marine research capabilities 
                    Reason #1. Inadequate research and development capacity 
                    <CheckboxTwo id="checkbox03" value="Solution #3." />
                    Enhancing scientific and technological research 
                    Reason #1. Inadequate research and development capacity
                    Scientific experimentation and technological applications for more effective means of creating material progress. 


                    <div className="pt-7 flex flex-wrap">
                      <CheckboxTwo id="checkbox04" value="Solution #4." />
                      Coordinating production research and development <br />
                      <span>Reason #2.</span> Inadequate research and development capacity <br />
                      Assimilating data and articulating global needs. The effect is global interdependent economic network. 

                    </div>

                    <CheckboxTwo id="checkbox05" value="New solution." />
                    <div className="pl-7">
                                            
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
                          rows={1}
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
                          rows={1}
                          placeholder="Enter the reason description"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                      ></textarea>
                  
                    </div>




                  </div>

          </form>
      </div>
    </>

  )
}
