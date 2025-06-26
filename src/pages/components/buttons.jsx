import Image from "next/image"

export const IconBtn = ({link, fileLoc, altText}) => {
    return(
        <button className="cursor-pointer">
            <a href={link} target="_blank">
                <Image aria-hidden src={fileLoc} alt={altText} width={40} height={40} />
            </a>
        </button>
    )
}

export const ResumeBtn = () => {
    return(
        <button className="bg-purple-500 hover:bg-purple-400 inset-shadow-2xs/30 inset-shadow-white px-4 py-2 rounded-3xl text-white text-lg cursor-pointer">
            <a href="/kevinprogress/SWE_KevinLe.pdf" download={"SWE_KevinLe.pdf"}>download resume</a>
        </button>
    )
}