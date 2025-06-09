import Image from "next/image";

export default function Contact(){

    return(
        <>
            <div className="border-2 border-purple-500 shadow-white shadow-2xl rounded-2xl px-20 py-10 flex flex-col gap-5 items-center">
                <div>
                    <h1 className="text-6xl">contact me</h1>
                </div>
                <div>
                    <div className="flex gap-4">
                        <button>
                            <a href="https://github.com/keebinle22">
                                <Image aria-hidden src="/kevinprogress/assets/github.svg" alt="GitHub Icon" width={40} height={40} />
                            </a>
                        </button>
                        <button>
                            <a href="https://www.linkedin.com/in/kevinle22/">
                                <Image aria-hidden src="/kevinprogress/assets/linkedin.svg" alt="LinkedIn Icon" width={40} height={40}/>
                            </a>
                        </button>
                        <button>
                            <a href="mailto:kevin.le.2200@gmail.com">
                                <Image aria-hidden src="/kevinprogress/assets/mail.svg" alt="Mail Icon" width={40} height={40} />
                            </a>
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-400 px-3 rounded-3xl text-white text-sm">
                            <a href="/kevinprogress/SWE_KevinLe.pdf" download={"SWE_KevinLe.pdf"}>download resume</a>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}