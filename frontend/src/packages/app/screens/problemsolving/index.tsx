import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'

import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
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

            <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
                <div className="flex flex-wrap gap-7.5">
                    <form>
                        <div className="mb-4">
                            <label className="mb-2.5 block font-medium text-black dark:text-white">
                            Describe the problem:
                            </label>
                            <div className="relative">
                                <input
                                    type="input"
                                    placeholder="Enter your message"
                                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    value="car won't start"
                                />
                            </div>
                        </div>

                        <div className="mb-5">
                            <input
                            type="Search"
                            value="Send message"
                            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                            />
                        </div>
                    </form>


                </div>

                <div className="mb-7.5 flex flex-wrap gap-5 xl:gap-7.5">
                        <a className="inline-flex items-center justify-center gap-2.5 bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                            <span>
                                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z" fill="">
                                    </path>
                                    <path d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z" fill="">
                                    </path>
                                </svg>
                            </span>Button With Icon
                        </a>
                        <a className="inline-flex items-center justify-center gap-2.5 bg-meta-3 px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                            <span>
                                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z" fill="">
                                    </path>
                                    <path d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z" fill="">
                                    </path>
                                </svg>
                            </span>Button With Icon
                        </a>
                        <a className="inline-flex items-center justify-center gap-2.5 bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                            <span>
                                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z" fill="">
                                    </path>
                                    <path d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z" fill="">
                                    </path>
                                </svg>
                            </span>Button With Icon
                        </a>
                        <a className="inline-flex items-center justify-center gap-2.5 border border-primary px-10 py-4 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10" href="#">
                            <span>
                                <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 16.6656H2.1875C1.69022 16.6656 1.21331 16.4681 0.861675 16.1164C0.510044 15.7648 0.3125 15.2879 0.3125 14.7906V5.20935C0.3125 4.71207 0.510044 4.23516 0.861675 3.88353C1.21331 3.53189 1.69022 3.33435 2.1875 3.33435H17.8125C18.3098 3.33435 18.7867 3.53189 19.1383 3.88353C19.49 4.23516 19.6875 4.71207 19.6875 5.20935V14.7906C19.6875 15.2879 19.49 15.7648 19.1383 16.1164C18.7867 16.4681 18.3098 16.6656 17.8125 16.6656ZM2.1875 4.58435C2.02174 4.58435 1.86277 4.6502 1.74556 4.76741C1.62835 4.88462 1.5625 5.04359 1.5625 5.20935V14.7906C1.5625 14.9564 1.62835 15.1153 1.74556 15.2325C1.86277 15.3498 2.02174 15.4156 2.1875 15.4156H17.8125C17.9783 15.4156 18.1372 15.3498 18.2544 15.2325C18.3717 15.1153 18.4375 14.9564 18.4375 14.7906V5.20935C18.4375 5.04359 18.3717 4.88462 18.2544 4.76741C18.1372 4.6502 17.9783 4.58435 17.8125 4.58435H2.1875Z" fill="">
                                    </path>
                                    <path d="M9.9996 10.6438C9.63227 10.6437 9.2721 10.5421 8.95898 10.35L0.887102 5.45001C0.744548 5.36381 0.642073 5.22452 0.602222 5.06277C0.58249 4.98268 0.578725 4.89948 0.591144 4.81794C0.603563 4.73639 0.631922 4.65809 0.674602 4.58751C0.717281 4.51692 0.773446 4.45543 0.839888 4.40655C0.906331 4.35767 0.981751 4.32236 1.06184 4.30263C1.22359 4.26277 1.39455 4.28881 1.5371 4.37501L9.60898 9.28126C9.7271 9.35331 9.8628 9.39143 10.0012 9.39143C10.1395 9.39143 10.2752 9.35331 10.3934 9.28126L18.4621 4.37501C18.5323 4.33233 18.6102 4.30389 18.6913 4.29131C18.7725 4.27873 18.8554 4.28227 18.9352 4.30171C19.015 4.32115 19.0901 4.35612 19.1564 4.40462C19.2227 4.45312 19.2788 4.51421 19.3215 4.58438C19.3642 4.65456 19.3926 4.73245 19.4052 4.81362C19.4177 4.89478 19.4142 4.97763 19.3948 5.05743C19.3753 5.13723 19.3404 5.21242 19.2919 5.27871C19.2434 5.34499 19.1823 5.40108 19.1121 5.44376L11.0402 10.35C10.7271 10.5421 10.3669 10.6437 9.9996 10.6438Z" fill="">
                                    </path>
                                </svg>
                            </span>Button With Icon
                        </a>
                </div>

            </div>

            <div className="wrapper wrapper-content animated fadeInRight">

                <div className="ibox-content m-b-sm border-bottom">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel panel-info">

                                <div className="panel-body">
                                    <p>
                                        <label>Опишите проблему</label>
                                    </p>
                                    <div className="input-group">
                                        <input type="text" id="description" name="description" value="не заводится автомобиль" placeholder="Опишите проблему" className="input form-control"/>
                                        <span className="input-group-btn">
                                            <button type="submit" className="btn btn-primary"> <i className="fa fa-search"></i> поиск</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ibox float-e-margins panel panel-info">
                                <div className="ibox-title panel-heading">
                                    <h5>Уточняющие вопросы</h5>
                                    <div className="ibox-tools">
                                        <a className="collapse-link">
                                            <i className="fa fa-chevron-up"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ibox-content">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label >Введите надпись на этикетке клапана</label>
                                                <textarea className="form-control" id="message" rows={1} placeholder="Введите надпись на этикетке клапана" name="qt_123"></textarea>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="closeButton" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_124"/>Close Button
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="addBehaviorOnToastClick" type="checkbox" value="checked" className="input-mini" name="qc_125"/>Add behavior on toast click
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="debugInfo" type="checkbox" value="checked" className="input-mini" name="qc_126"/>Debug
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="progressBar" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_127"/>Progress Bar
                                                </label>
                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="preventDuplicates" type="checkbox" value="checked" className="input-mini" name="qc_128"/>Prevent Duplicates
                                                </label>
                                            </div>
                                            Фильтр по эксперту/базе знаний:
                                            <div className="checkbox">
                                            </div>
                                            <div className="m-l checkbox">

                                            </div>
                                            <div className="checkbox">
                                                <label className="checkbox" >
                                                    <input id="closeButton" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_129"/>Ann Williams
                                                </label>
                                                <div className="m-l">
                                                    <label className="checkbox" >
                                                        <input id="closeButton" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_130"/>HIPAA expertise
                                                    </label>
                                                    <label className="checkbox" >
                                                        <input id="closeButton" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_131"/>COBIT specialist
                                                    </label>

                                                </div>
                                                <label className="checkbox" >
                                                    <input id="addBehaviorOnToastClick" type="checkbox" value="checked" className="input-mini" name="qc_132"/>Daniel Jobs
                                                </label>
                                                <label className="checkbox" >
                                                    <input id="debugInfo" type="checkbox" value="checked" className="input-mini" name="qc_133"/>Mary Stone
                                                </label>
                                                <label className="checkbox" >
                                                    <input id="progressBar" type="checkbox" value="checked" className="input-mini" checked={true} name="qc_134"/>Ansrew Williams
                                                </label>
                                            </div>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label >Введите дату когда клапан сломался</label>
                                                <textarea className="form-control" id="message" rows={1} placeholder="Введите дату когда клапан сломался" name="qd_135"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label >Работает ли бензонасос при прямом подключениия к двигателю?</label>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="qc_136" value="21840" checked={true}/>Да
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label className="radio">
                                                        <input type="radio" name="qc_136" value="21841"/>Нет
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label >Введите количество сломанных зубцов</label>
                                                <textarea className="form-control" id="message" rows={1} placeholder="Введите количество сломанных зубцов" name="qn_140"></textarea>
                                            </div>

                                        </div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label >На подъемнике или эстакаде проверьте места соединений, есть ли перегибы топливного шланга?</label>
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="qc_137" value="21843" checked={true}/>Нет
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label className="radio">
                                                        <input type="radio" name="qc_137" value="21844"/>Небольшой перегиб
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label className="radio">
                                                        <input type="radio" name="qc_137" value="21845"/>Есть потертость
                                                    </label>
                                                </div>
                                                <div className="radio">
                                                    <label className="radio">
                                                        <input type="radio" name="qc_137" value="21846"/>Есть повреждение
                                                    </label>
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
