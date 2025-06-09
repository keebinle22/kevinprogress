export default function Bios(){

    return(
        <>
            <div className="border-3 border-purple-500 rounded-2xl shadow-white shadow-2xl p-20">
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-9xl">Kevin Le</h1>
                        <span className="text-3xl font-semibold">SDE | SDET | QA</span>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-3xl text-white text-lg">
                        <a href="/kevinprogress/SWE_KevinLe.pdf" download={"SWE_KevinLe.pdf"}>download resume</a>
                    </button>
                    <p className="text-2xl">Hello! My name is Kevin Le, and I’m seeking opportunities in SDET or QA. As a Software Developer in Test at RBC Wealth Management, I designed and implemented over 500 automated functional and integration test scripts using model-based tools such as ConformIQ and Hexawise, and utilized RBC’s keyword-driven Selenium automation framework. Test cases and results were managed in Tricentis qTest.</p>
                </div>
            </div>
        </>
    )
}