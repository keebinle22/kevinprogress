import Image from "next/image";

export default function Skills(){

    return(
        <>
            <div className="border-2 border-purple-500 shadow-white shadow-2xl rounded-2xl p-20 flex flex-col gap-20 items-center w-full">
                <div>
                    <h1 className="text-6xl">technical skills</h1>
                </div>
                <div className="grid grid-cols-3 gap-7">
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/java.svg" alt="Java Icon" width={64} height={64} />
                        <span>Java</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/javascript.svg" alt="Javascript Icon" width={64} height={64} />
                        <span>Javascript</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/python.svg" alt="Python Icon" width={64} height={64} />
                        <span>Python</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/selenium.svg" alt="Selenium Icon" width={64} height={64}/>
                        <span>Selenium</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/postman.svg" alt="Postman Icon" width={64} height={64} />
                        <span>Postman</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/mysql.svg" alt="MySql Icon" width={64} height={64} />
                        <span>MySQL</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/mongodb.svg" alt="MongoDB Icon" width={64} height={64} />
                        <span>MongoDB</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/react.svg" alt="React Icon" width={64} height={64} />
                        <span>React</span>
                    </div>
                    <div className="flex flex-col items-center p-3">
                        <Image aria-hidden src="/kevinprogress/assets/nextjs_icon_dark.svg" alt="NextJS Icon" width={64} height={64} />
                        <span>NextJS</span>
                    </div>
                    <div className="flex flex-col items-center p-3 col-start-2">
                        <Image aria-hidden src="/kevinprogress/assets/spring-boot.svg" alt="Spring Boot Icon" width={72.23} height={64} />
                        <span>Spring Boot</span>
                    </div>
                </div>
            </div>
        </>
    )
}