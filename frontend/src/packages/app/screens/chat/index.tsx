import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Chat Page",
  description: "This is Next.js Chat Page",
};

export function ChatScreen() {
  return (
    <>
      <Breadcrumb pageName="Chat" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="flex flex-col gap-7.5">

          <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
            Chat here <i className="fas fa-comments"></i>
          </h2>

          <span className="mb-1.5 block font-medium">
            Welcome! I'm Leopard. I'm speaking English, French, German and Russian. Ask questions.<br/>
            Input: Hello<br/>
            Response: Hi there!<br/>
            Input: How are you?<br/>
            Response: My logic and cognitive functions are normal.<br/>
            Input: What is your name?<br/>
            Response: My name is Program E.<br/>
          </span>


          <form>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Your message
                </label>
                <div className="relative">
                  <input
                    type="input"
                    placeholder="Enter your message"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />

                </div>
              </div>


              <div className="mb-5">
                <input
                  type="submit"
                  value="Send message"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

            </form>

        </div>
      </div>
    </>
  )
}
