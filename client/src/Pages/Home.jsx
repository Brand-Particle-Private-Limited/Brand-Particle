import React from "react";
import { Images, Videos } from "../assets/Index";
import { Link } from "react-router-dom";

const Home = () => {

    const ServicesArray = [
        [
            {
                id: 1,
                videoPath: Videos.mainLeftVideo,
                tags: ["Node-js", "PHP", "Python"],
                name: "Website Development",
                description: "We don’t just build websites; we create digital experiences that your visitors will never forget.",
            },
            {
                id: 2,
                videoPath: Videos.mainLeftVideo,
                tags: ["Java", "React Native", "Flutter"],
                name: "App Development",
                description: "We make apps that are more than icons on the screen. We ensure that your app delivers top-tier performance while looking more stunning than your competitors.",
            },
            {
                id: 3,
                videoPath: Videos.mainLeftVideo,
                tags: ["Figma", "UI/UX", "Branding"],
                name: "Creative Design",
                description: "From logos to visuals, we create designs that don’t just speak, but shout out your brand’s vision",
            },
            {
                id: 4,
                videoPath: Videos.mainLeftVideo,
                tags: ["Consistency", "Analytics", "Engagement"],
                name: "Social Media Management",
                description: "We create posts that vibe with your followers and help you build an online presence that can skyrocket your revenue.",
            },
        ],
        [
            {
                id: 1,
                videoPath: Videos.mainLeftVideo,
                tags: ["Keywords", "Backlinks", "Ranking"],
                name: "Search Engine Optimization",
                description: "We help you rank above your competitors with SEO strategies that dominate search results.",
            },
            {
                id: 2,
                videoPath: Videos.mainLeftVideo,
                tags: ["Planning", "Targeting", "Execution"],
                name: "Strategic Marketing",
                description: "We craft killer marketing plans that help your brand standout in this crowded digital world - ensuring more engagement & increased ROI.",
            },
            {
                id: 3,
                videoPath: Videos.mainLeftVideo,
                tags: ["Cutting", "Effects", "Rendering"],
                name: "Professional Video Editing",
                description: "With expert editing & strategic storytelling we make your videos standout from the millions of videos being posted on the internet every single day.",
            },
            {
                id: 4,
                videoPath: Videos.mainLeftVideo,
                tags: ["Automation", "Funnels", "Integration"],
                name: "Advanced Webinar Funnel Setup",
                description: "We design advanced funnels that guarantee more enrollments for your webinars and ensure more sales.",
            },
        ],
    ];


    return (
        <>
            {/* Hero Section Code Here */}
            <section className="max-w-screen w-full min-h-screen dark:bg-dark-bg overflow-hidden pb-16 sm:pb-24">
                <section className="mt-[120px] lg:mt-[150px] container mx-auto flex items-start justify-start flex-col gap-8 relative px-4">
                    <article className="w-full relative z-[2]">
                        <h1 className="text-dark-primary text-4xl custom-sm:text-5xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-[4.05rem] leading-[1.1] font-semibold max-w-[900px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[950px]">We Help Clients Turn their Biz into a Revenue Machine</h1>
                    </article>
                    <article className="hidden lg:block w-full max-w-[420px] custom-lg:max-w-[490px] xl:max-w-[530px] relative">
                        <video
                            className="object-cover object-center max-w-[530px] rounded-3xl w-full max-h-[400px] overflow-hidden"
                            autoPlay
                            muted
                            loop
                            src={Videos.mainLeftVideo}>
                        </video>
                        <div className="w-[150px] h-[150px] absolute -right-[80px] top-1/2 -translate-y-1/2">
                            <img className="backdrop-blur-md animate-spin-slow" src={Images.RoundImg} alt="" />
                        </div>
                    </article>
                    <article className="lg:max-w-[500px] custom-lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[700px] w-full lg:absolute lg:top-3 lg:right-0">
                        <section className="relative">
                            <div className="hidden lg:block absolute w-[300px] -top-[1px] -left-[1px] 2xl:left-0">
                                <img src={Images.VideoComponent} alt="" />
                            </div>
                            <video
                                className="object-cover object-center lg:max-w-[700px] rounded-3xl w-full max-h-[450px] overflow-hidden"
                                autoPlay
                                muted
                                loop
                                src={Videos.mainLeftVideo}>
                            </video>
                            <div className="absolute w-[350px] lg:w-[300px] -left-[2px] -bottom-[1px] lg:h-[145px] h-[170px] pr-12 flex pb-3">
                                <div className="absolute top-0 left-0 w-full h-full z-[1]">
                                    <img src={Images.VideoComponentNew} alt="" />
                                </div>
                                <div className="text-white z-[2] font-light gap-2 flex flex-col items-end justify-end relative">
                                    <p className="lg:text-xs text-dark-primary">Since <br />
                                        2020</p>
                                    <p className="lg:text-sm text-right">Generate 7-Figure Income Like a Child’s Play</p>
                                </div>
                            </div>
                        </section>
                    </article>
                </section>
            </section>

            {/* About Us Code Here */}
            <section className="max-w-screen w-full dark:bg-dark-bg p-16 sm:py-20 md:py-[9rem] lg:py-[12rem] md:px-0 px-4">
                <section className="relative container mx-auto flex items-center justify-center flex-col gap-3 sm:gap-6 z-[2]">
                    <h1 className="about-us-min-text text-[11rem] custom-sm:text-[12rem] sm:text-[18rem] md:text-[23rem] lg:text-[30rem] font-black opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">WIN</h1>
                    <article className="z-[2]">
                        <h4 className="text-sm text-center sm:text-base text-white backdrop-blur-md uppercase bg-[rgba(110,127,153,0.11)] py-2 px-6 rounded-3xl">Why Biz Owners Love Brand Particle?</h4>
                    </article>
                    <article className="max-w-full sm:max-w-[600px] lg:max-w-[860px] w-full z-[2]">
                        <div className="relative">
                            <img className="w-20 sm:w-32 absolute top-20 sm:-top-3 sm:-left-24 lg:-top-8 lg:-left-20" src={Images.AboutUsElement1} alt="" />
                        </div>
                        <h2 className="text-white text-[1.25rem] custom-sm:text-[1.5rem] sm:text-[1.5rem] leading-[1.2] text-center font-medium">We love doing epic sh*t!<span className="text-dark-primary"> Our team of digital warriors take up all your stresses and help you earn 15-20 lakhs every single month.</span></h2>
                    </article>
                    <article className="pt-8 sm:pt-6 z-[2]">
                        <Link to={'#'} className="px-11 py-2 rounded-[100px] bg-dark-primary">Let’s Boost Your Biz</Link>
                    </article>
                </section>
            </section>

            <section className="max-w-screen w-full dark:bg-dark-bg py-20 md:px-0 px-4">
                <section className="container mx-auto">
                    <div className="w-fit ml-auto mr-20 flex flex-col gap-5 mb-24">
                        <article className="flex items-center justify-start gap-4">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <h4 className="text-xl text-white font-light">Our Expertise</h4>
                        </article>
                        <article>
                            <h2 className="text-dark-primary text-5xl font-semibold leading-[1.2] capitalize">We Are the Giants <br /> of this Field</h2>
                        </article>
                    </div>
                    <section className="flex justify-start items-start gap-20 relative main-service-conatiner">
                        {
                            ServicesArray.map((items, index) => {
                                return (
                                    <>
                                        <div key={index} className="w-full flex flex-col items-start justify-start gap-20">
                                            {items.map((item, i) => {
                                                return (
                                                    <>
                                                        <article className="flex w-full flex-col items-start justify-start gap-5 group">
                                                            <div className="w-full relative overflow-hidden">
                                                                <section className="absolute max-w-[250px] w-full transition-all duration-300 group-hover: -top-[1px]  -right-[1px]">
                                                                    <div className="absolute top-0 left-0">
                                                                        <img src={Images.ServiceComponent} alt="" />
                                                                    </div>
                                                                </section>
                                                                <video className="object-cover max-h-[489px] object-center rounded-3xl w-full overflow-hidden"
                                                                    autoPlay
                                                                    muted
                                                                    loop
                                                                    src={item.videoPath}>
                                                                </video>
                                                            </div>
                                                            <div className="text-white w-full flex flex-col items-start justify-start gap-2">
                                                                <h1 className="text-4xl font-semibold">{ item.name }</h1>
                                                                <div className="flex items-center justify-start gap-2">
                                                                    <span className="w-2 h-2 rounded-full bg-white block"></span>
                                                                    <p className="font-light text-sm w-[95%]">{ item.description }</p>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </>
    );
};

export default Home;
