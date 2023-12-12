
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState} from 'react';
import NotificationDropdown from "app/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "app/components/Dropdowns/UserDropdown.js";
import { P } from 'app/design/typography'

import {menuType, Menu} from "app/constants/menu";
import { Button } from "react-native";



function RenderSubItem({data}){
  const router = useRouter();

  console.log("?    " + data.name + " - " + data.open)
  return (
  <>  
     <li key={data.name} className="inline-flex pl-3">
      <Link legacyBehavior href={data.path}>
        <a
          href="#pablo"
          className={
            " text-sm block mb-4 no-underline font-semibold " +
            (router.pathname.indexOf(data.path) !== -1
              ? "text-lightBlue-500 hover:text-lightBlue-600"
              : "text-blueGray-700 hover:text-blueGray-500")
          }
        >
          
          <i
            className={ 
              "fas fa-"+data.icon
            }
          ></i>{" "}   
          {data.name}
        </a>
      </Link>
    </li> 
  </>
  )
}


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();

  const [toggleDown, setToggleDown] = useState(Menu);

  const toggleSideMenuFolderList = (index) => {

    const nextToggleDown: menuType[] = toggleDown.map((item, i) => {
      if (i === index+1) {
        item.open = !item.open;
      }

      return item;
    });
    setToggleDown(nextToggleDown);
  };


  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => {  setCollapseShow("bg-white m-2 py-3 px-6")  } }
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Left Upper Brand */}
          <Link legacyBehavior href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              MeanMine
            </a>
          </Link>


          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li key="1" className="inline-block relative">
              <NotificationDropdown />
              <P>NotificationDropdown</P>
            </li>
            <li key="2" className="inline-block relative">
              <UserDropdown />
              <P>UserDropdown</P>
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link legacyBehavior href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      MeanMine
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Render menu items - Start*/}
            <ul>
              {toggleDown.map((item) => 
              <>
                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">

                    <Link legacyBehavior href={item.path ? item.path : ""  }   >
                    <a
                      onClick={(e) => { 
                        if (item.submenu) {
                              e.preventDefault();
                              toggleSideMenuFolderList(item.id);
                            } 

                      }}

                      href="#pablo"
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (router.pathname.indexOf(item.path) !== -1
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      <i
                        className={ 
                          "fas fa-"+item.icon
                        }
                      ></i>{" "}          
                      {item.name + " "}
                      { item.submenu ?
                      item.open ? (
                        <i
                        className={ 
                          "fas fa-caret-down"
                        }
                      ></i> 
                      ) : (
                        <i
                        className={ 
                          "fas fa-caret-up"
                        }
                      ></i> 
                      ) : null
                      }                      
                    </a>
                  </Link>      
            
                </h6>
                {item.submenu ? item.open ?
                  <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                    {item.submenu.map((data) => <RenderSubItem key={data.name} data={data}  /> ) }
                  </ul>
                : null : null}

              </>              
              
              )}
            </ul>
            {/* Render menu items - End*/}
          </div>
        </div>
      </nav>
    </>
  );
}
