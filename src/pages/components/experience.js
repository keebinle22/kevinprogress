"use client"
export default function Experience(){
    const skills1 = ["Selenium", "Java", "Postman", "SQL", "Jenkins"];
    const skills2 = ["Java", "Sprint Boot", "SQL", "JavaScript", "React", "AWS", "Docker"];
    return(
        <>
            <div className="border-2 border-purple-500 shadow-white shadow-2xl rounded-2xl p-20 flex flex-col gap-20 items-center">
                <div>
                    <h1 className="text-6xl">experience</h1>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <div className="border-b-2 border-t-2 border-purple-500 rounded-xl p-4 flex flex-col gap-3 w-full" id="exp1">
                            <div className="flex flex-col">
                                <h2 className="text-4xl" id="job-title">Software Developer in Test</h2>
                                <span className="text-lg">Royal Bank of Canada (Contracted through Genesis10)</span>
                                <span className="">Minneapolis, MN</span>
                                <span className="">Jun 2022 - Jun 2024</span>
                            </div>
                            <div>
                                <p className="text-2xl">
                                    I&apos;m an SDET with 2 years of experience designing and implementing end-to-end test automation frameworks to support scalable, high-quality software delivery. I&apos;m proficient in Java, Selenium, Jenkins, REST APIs, and have integrated automated testing into CI/CD pipelines. I&apos;ve contributed to large-scale cloud migration efforts, ensuring product reliability and system integrity through full-stack validation across the UI, backend, and APIs. I work well in Agile environments, regularly participating in sprint-based test development, defect triaging, and release planning. Throughout my experience, I&apos;ve helped reduce release cycles, improve test coverage, and enhance overall system stability. I&apos;m a collaborative and detail-oriented engineer with a strong passion for building resilient automation solutions that align closely with development workflows and business goals.
                                </p>
                            </div>
                            <div className="py-2" id="tech-stack">
                                <ul className="flex gap-4 text-sm">
                                    {skills1.map((s, key) => {
                                        return(
                                            <li key={key} className="bg-purple-500 px-3 py-2 rounded-4xl text-white">{s}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="border-b-2 border-t-2 border-purple-500 rounded-xl p-4 flex flex-col gap-3 w-full" id="exp2">
                            <div className="flex flex-col">
                                <h2 className="text-4xl" id="job-title">Software Developer Trainee</h2>
                                <span className="text-lg">Genesis10</span>
                                <span className="">Minneapolis, MN</span>
                                <span className="">Feb 2022 - Jun 2022</span>
                            </div>
                            <div>
                                <p className="text-2xl">
                                    Software Developer Trainee with hands-on experience in building dynamic, user-focused web applications featuring authentication, data visualization, and data management operations. Proficient in Java, SQL, JavaScript, HTML, and CSS, with a strong understanding of front-end and back-end integration.

                                    Programmed RESTful APIs to streamline communication between client and server, enhancing data flow and overall system performance. Skilled in GitHub-based collaboration, contributing to 5+ feature branches, resolving merge conflicts, and maintaining code quality through peer reviews and pull requests.

                                    Developed a solid foundation in DevOps practices, leveraging Jenkins for continuous integration and Docker for containerization and deployment, significantly improving application delivery speed and reliability. Known for adaptability, problem-solving, and a strong commitment to writing clean, maintainable code in Agile development environments.
                                </p>
                            </div>
                            <div className="py-2" id="tech-stack">
                                <ul className="flex gap-4 text-sm">
                                    {skills2.map((s, key) => {
                                        return(
                                            <li key={key} className="bg-purple-500 px-3 py-2 rounded-4xl text-white">{s}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-center w-full">
                            <div>
                                <h1 className="text-5xl">education</h1>
                            </div>
                            <div className="flex-col gap-5 items-center justify-center w-full">
                                <div className="border-b-2 border-t-2 border-purple-500 rounded-xl p-4 flex flex-col gap-3" id="uni">
                                    <div className="flex flex-col">
                                        <h2 className="text-4xl" id="uni-name">University of Minnesota - Twin Cities</h2>
                                        <span className="text-2xl">Bachelor of Arts in Computer Science</span>
                                        <span className="text-lg">Mathematic Minor</span>
                                        <span className="text-lg">Minneapolis, MN</span>
                                        <span className="text-lg">Sept 2018 - Dec 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}