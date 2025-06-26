"use client"
import Image from "next/image";
import { IconBtn, ResumeBtn } from "../components/buttons";

export default function Contact(){

    return(
        <>
            <div className="border-2 border-purple-500 shadow-white shadow-2xl rounded-2xl px-20 py-10 flex flex-col gap-5 items-center">
                <div>
                    <h1 className="text-6xl">contact me</h1>
                </div>
                <div>
                    <div className="flex gap-4">
                        <IconBtn link="https://github.com/keebinle22" fileLoc="/kevinprogress/assets/github.svg" altText="GitHub Icon"/>
                        <IconBtn link="https://www.linkedin.com/in/kevinle22/" fileLoc="/kevinprogress/assets/linkedin.svg" altText="LinkedIn Icon"/>
                        <IconBtn link="mailto:kevin.le.2200@gmail.com" fileLoc="/kevinprogress/assets/mail.svg" altText="Mail Icon"/>
                        <ResumeBtn/>
                    </div>
                </div>
            </div>
        </>
    )
}