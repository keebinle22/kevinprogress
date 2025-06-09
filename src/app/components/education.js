export default function Education(){

    return(
        <>
        <div className="border-2 border-purple-500 rounded-2xl p-20 w-full"> 
            <div className="flex flex-col gap-20 items-center">
                <div>
                    <h1 className="text-6xl">Education</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <div className="border-b-2 border-t-2 border-purple-500 rounded-xl p-4 flex flex-col gap-3" id="uni">
                            <div className="flex flex-col">
                                <h2 className="text-4xl" id="uni-name">University of Minnesota - Twin Cities</h2>
                                <span className="text-lg">Bachelor of Arts in Computer Science</span>
                                <span>Mathematic Minor</span>
                                <span className="">Minneapolis, MN</span>
                                <span className="">Sept 2018 - Dec 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}