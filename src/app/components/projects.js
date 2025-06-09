"use client"
export default function Projects(){
    const skills1 = ["NextJS", "TailwindCSS", "Google API", "Vercel"];
    const skills2 = ["NextJS", "TailwindCSS", "Vercel", "MongoDB", "NodeJS"];

    const handleDropdown = (id) => {
        document.getElementById("desc"+id).classList.toggle("hidden");
    }
    return(
        <>
            <div className="border-2 border-purple-500 shadow-white shadow-2xl rounded-2xl p-20 flex flex-col gap-20 items-center w-full">
                <div>
                    <h1 className="text-6xl">projects</h1>
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <div className="w-full">
                            <div className="bg-purple-500 flex justify-center items-center p-3">
                                <div className="flex-1 pl-5 text-4xl">Journi</div>
                                <div className="hover:bg-purple-300 p-2" onClick={() => handleDropdown(1)}>
                                    <svg viewBox="0 0 100 100" width="25" height="25" preserveAspectRatio="xMidYMid meet">
                                        <polygon points="50,90 10,10 90,10" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 border-2 rounded-b-2xl border-purple-500 px-10 py-5 text-2xl hidden" id="desc1">
                                <span className="font-bold">App Link (to be added)</span>
                                <p>
                                    Leverages the Google API to search for locations, optimize a route that includes all selected stops, and display the final route on an interactive map. The app handles real-time input, reorders stops for optimal travel time, and dynamically updates the route display. Designed to help travelers, delivery drivers, or event planners quickly generate optimized multi-stop routes. Integrated Google Directions and Places APIs to streamline location handling and routing logic.
                                </p>
                                <div className="py-2" id="tech-stack">
                                    <ul className="flex gap-4 text-lg">
                                        {skills1.map((s, key) => {
                                            return (
                                                <li key={key} className="bg-purple-500 px-4 py-2 rounded-4xl text-white">{s}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="bg-purple-500 flex justify-center items-center p-3">
                                <div className="flex-1 pl-5 text-4xl">VocabVault (KR Edition)</div>
                                <div className="hover:bg-purple-300 p-2" onClick={() => handleDropdown(2)}>
                                    <svg viewBox="0 0 100 100" width="25" height="25" preserveAspectRatio="xMidYMid meet">
                                        <polygon points="50,90 10,10 90,10" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 border-2 rounded-b-2xl border-purple-500 px-10 py-5 text-2xl hidden" id="desc2">
                                <span className="font-bold">App Link (to be added)</span>
                                <p>
                                    Master learning Korean efficiently with this interactive Korean language learning app. Enter your own vocabulary words and reinforce your memory using a combination of flashcards and typing-based practice. Whether you're building your own word lists or reviewing key terms, this app helps you learn actively and retain more through repetition and engagement.
                                </p>
                                <div className="py-2" id="tech-stack">
                                    <ul className="flex gap-4 text-lg">
                                        {skills2.map((s, key) => {
                                            return (
                                                <li key={key} className="bg-purple-500 px-4 py-2 rounded-4xl text-white">{s}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}