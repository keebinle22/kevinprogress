"use client"

import Image from "next/image"
import { IconBtn, ResumeBtn } from "../components/buttons"

export default function Bios(){

    return(
        <>
            <div className="border-3 border-purple-500 rounded-2xl shadow-white shadow-2xl p-20">
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-9xl">Kevin Le</h1>
                        <span className="text-3xl font-semibold">SDE | SDET | QA</span>
                    </div>
                    <div className="flex gap-4">
                        <IconBtn link="https://github.com/keebinle22" fileLoc="/kevinprogress/assets/github.svg" altText="GitHub Icon"/>
                        <IconBtn link="https://www.linkedin.com/in/kevinle22/" fileLoc="/kevinprogress/assets/linkedin.svg" altText="LinkedIn Icon"/>
                        <IconBtn link="mailto:kevin.le.2200@gmail.com" fileLoc="/kevinprogress/assets/mail.svg" altText="Mail Icon"/>
                    </div>
                    <ResumeBtn/>
                    <p className="text-2xl">Hello! My name is Kevin Le, and I’m seeking opportunities in SDET or QA. As a Software Developer in Test at RBC Wealth Management, I designed and implemented over 500 automated functional and integration test scripts using model-based tools such as ConformIQ and Hexawise, and utilized RBC’s keyword-driven Selenium automation framework. Test cases and results were managed in Tricentis qTest.</p>
                </div>
            </div>
        </>
    )
}