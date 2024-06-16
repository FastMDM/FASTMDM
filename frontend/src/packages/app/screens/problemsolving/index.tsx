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


export const metadata: Metadata = {
    title: "FastMDM Problem Solving",
    description: "This is FastMDM Problem Solving",
};

export function ProblemSolvingScreen() {
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
                            placeholder="Enter your message"
                            className="inline-flex basis-3/4 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            value="car won't start"
                        />

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



                    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-styled-tab" data-tabs-target="#styled-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-styled-tab" data-tabs-target="#styled-dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
                            </li>
                            <li className="me-2" role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-styled-tab" data-tabs-target="#styled-settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
                            </li>
                            <li role="presentation">
                                <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-styled-tab" data-tabs-target="#styled-contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
                            </li>
                        </ul>
                    </div>
                    <div id="default-styled-tab-content">
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-settings" role="tabpanel" aria-labelledby="settings-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                        <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="styled-contacts" role="tabpanel" aria-labelledby="contacts-tab">
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
                        </div>
                    </div>

                </form>
            </div>

            <div className="wrapper wrapper-content animated fadeInRight">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox">
                            <div className="ibox-content">
                                <p>
                                    <a href="/ru/ru/PS/Solve/123" className="btn btn-primary">Решения базы знаний (40)</a>
                                    <a href="/ru/ru/PS/Recommend/123" className="btn btn-outline btn-primary">Рекомендации (40)</a>
                                    <a href="/ru/ru/PS/Comments/123" className="btn btn-outline btn-primary">Комментарии (40)</a>
                                    <a href="/ru/ru/PS/Same/123" className="btn btn-outline btn-primary">Такая же проблема (40)</a>
                                    <a href="/ru/ru/PS/Similar/123" className="btn btn-outline btn-primary">Похожие проблемы (40)</a>
                                </p>

                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <a href="/ru/ru/PS/Solution/123">
                                                    Активировать электролит аккумуляторной батареи.
                                                    Подробнее...
                                                </a><br/>
                                                    <span className="label label-info">Лучшее решение</span>
                                                    <i className="fa fa-eye"> </i> 25 просмотров
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> (5) Нравится!</button>
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-down"></i> (3) Не нравится!</button>

                                            </div>
                                            <div className="col-lg-2">
                                                <a href="" className="pull-left">
                                                    <img alt="image" src="/Images/a6.jpg" className="img-sm"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        Ann Williams
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <small className="text-muted">Был 12.06.2014 в 4:21 </small>
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр эксперта</button>

                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="media-body">
                                                    <i className="fa fa-bolt"></i>
                                                    <a href="#">
                                                        База знаний HIPAA Privacy
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр базу знаний</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <a href="/ru/ru/PS/Solution/123">
                                                    Отключив клеммы от аккумулятора, аккуратно зачистите клеммы, крепко зажмите болты крепления.
                                                    Подробнее...
                                                </a><br/>
                                                    <span className="label label-primary">Решение</span>
                                                    <i className="fa fa-eye"> </i>23 просмотров
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> (6) Нравится!</button>
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-down"></i> (9) Не нравится!</button>

                                            </div>
                                            <div className="col-lg-2">
                                                <a href="" className="pull-left">
                                                    <img alt="image" src="/Images/a5.jpg" className="img-sm"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        Daniel Jobs
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 350 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 4-
                                                    <small className="text-muted">Был 12.06.2014 в 4:21 </small>
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр эксперта</button>
                                                </div>

                                            </div>
                                            <div className="col-lg-2">
                                                <div className="media-body">
                                                    <i className="fa fa-bolt"></i>
                                                    <a href="#">
                                                        База знаний HIPAA Privacy
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр базу знаний</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <a href="/ru/ru/PS/Solution/123">
                                                    Нужно срочно купить и поставить новый воздушный фильтр, так как его отсутствие чревато для двигателя ускоренной поломкой из-за попадания вместе с воздухом посторонних частиц внутрь цилиндров и образования вредного нагара.
                                                    Подробнее...
                                                </a><br/>
                                                    <span className="label label-primary">Решение</span>
                                                    <i className="fa fa-eye"> </i> 155 просмотров
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> (59) Нравится!</button>
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-down"></i> (4) Не нравится!</button>

                                            </div>
                                            <div className="col-lg-2">
                                                <a href="" className="pull-left">
                                                    <img alt="image" src="/Images/a4.jpg" className="img-sm"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        Ray Bonson
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 1450 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <small className="text-muted">Был 12.06.2014 в 4:21 </small>
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр эксперта</button>
                                                </div>

                                            </div>
                                            <div className="col-lg-2">
                                                <div className="media-body">
                                                    <i className="fa fa-bolt"></i>
                                                    <a href="#">
                                                        База знаний HIPAA Privacy
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр базу знаний</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <a href="/ru/ru/PS/Solution/123">
                                                    Заменить старые плавкие вставки на новые
                                                    Подробнее...
                                                </a><br/>
                                                    <span className="label label-danger ">Плохое решение</span>
                                                    <i className="fa fa-eye"> </i> 155 просмотров
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> (59) Нравится!</button>
                                                    <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-down"></i> (4) Не нравится!</button>

                                            </div>
                                            <div className="col-lg-2">
                                                <a href="" className="pull-left">
                                                    <img alt="image" src="/Images/a3.jpg" className="img-sm"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        Mary Stone
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 450 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 2
                                                    <small className="text-muted">Был 12.06.2014 в 4:21 </small>
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр эксперта</button>
                                                </div>

                                            </div>
                                            <div className="col-lg-2">
                                                <div className="media-body">
                                                    <i className="fa fa-bolt"></i>
                                                    <a href="#">
                                                        База знаний HIPAA Privacy
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр базу знаний</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="panel panel-primary">
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-lg-8">

                                                <a href="/ru/ru/PS/Solution/123">
                                                    Стартер подлежит ремонту, если цела его обмотка.
                                                    Подробнее...
                                                </a><br />
                                                <span className="label label-warning">На оценке</span>
                                                <i className="fa fa-eye"> </i>155 просмотров
                                                <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-up"></i> (56) Нравится!</button>
                                                <button className="btn btn-white btn-xs"><i className="fa fa-thumbs-down"></i> (7) Не нравится!</button>

                                            </div>
                                            <div className="col-lg-2">
                                                <a href="" className="pull-left">
                                                    <img alt="image" src="/Images/a2.jpg" className="img-sm"/>
                                                </a>
                                                <div className="media-body">
                                                    <a href="#">
                                                        Andrew Williams
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 50 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 5--
                                                    <small className="text-muted">Был 12.06.2014 в 4:21 </small>
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр эксперта</button>
                                                </div>

                                            </div>
                                            <div className="col-lg-2">
                                                <div className="media-body">
                                                    <i className="fa fa-bolt"></i>
                                                    <a href="#">
                                                        База знаний HIPAA Privacy
                                                    </a>
                                                    <i className="fa fa-thumbs-up"></i> 250 Like!
                                                    <i className="fa fa-thumbs-up"></i> Рейтинг 3++
                                                    <button className="btn btn-white btn-xs"><i className="fa fancytree-ext-filter "></i> Добавить в фильтр базу знаний</button>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox-content text-center">
                            <i className="fa fa-share"></i> Поделиться:
                            <a className="btn btn-social-icon btn-adn btn-xs"><span className="fa fa-adn"></span></a>
                            <a className="btn btn-social-icon btn-bitbucket btn-xs"><span className="fa fa-bitbucket"></span></a>
                            <a className="btn btn-social-icon btn-dropbox btn-xs"><span className="fa fa-dropbox"></span></a>
                            <a className="btn btn-social-icon btn-facebook btn-xs"><span className="fa fa-facebook"></span></a>
                            <a className="btn btn-social-icon btn-flickr btn-xs"><span className="fa fa-flickr"></span></a>
                            <a className="btn btn-social-icon btn-foursquare btn-xs"><span className="fa fa-foursquare"></span></a>
                            <a className="btn btn-social-icon btn-github btn-xs"><span className="fa fa-github"></span></a>
                            <a className="btn btn-social-icon btn-google btn-xs"><span className="fa fa-google"></span></a>
                            <a className="btn btn-social-icon btn-instagram btn-xs"><span className="fa fa-instagram"></span></a>
                            <a className="btn btn-social-icon btn-linkedin btn-xs"><span className="fa fa-linkedin"></span></a>
                            <a className="btn btn-social-icon btn-microsoft btn-xs"><span className="fa fa-windows"></span></a>
                            <a className="btn btn-social-icon btn-odnoklassniki btn-xs"><span className="fa fa-odnoklassniki"></span></a>
                            <a className="btn btn-social-icon btn-openid btn-xs"><span className="fa fa-openid"></span></a>
                            <a className="btn btn-social-icon btn-pinterest btn-xs"><span className="fa fa-pinterest"></span></a>
                            <a className="btn btn-social-icon btn-reddit btn-xs"><span className="fa fa-reddit"></span></a>
                            <a className="btn btn-social-icon btn-soundcloud btn-xs"><span className="fa fa-soundcloud"></span></a>
                            <a className="btn btn-social-icon btn-tumblr btn-xs"><span className="fa fa-tumblr"></span></a>
                            <a className="btn btn-social-icon btn-twitter btn-xs"><span className="fa fa-twitter"></span></a>
                            <a className="btn btn-social-icon btn-vimeo btn-xs"><span className="fa fa-vimeo-square"></span></a>
                            <a className="btn btn-social-icon btn-vk btn-xs"><span className="fa fa-vk"></span></a>
                            <a className="btn btn-social-icon btn-yahoo btn-xs"><span className="fa fa-yahoo"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ibox-content text-center">
                            <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> У меня такая же проблема</button>
                            <button className="btn btn-white btn-xs"><i className="fa fa-comments"></i> Подписаться</button>
                        </div>
                    </div>
                    
                </div>



            </div>



        </>
    )
}
