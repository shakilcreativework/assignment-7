import { useContext } from "react";
import AppContexts from "../../context/AppContexts";
import Container from "../../shared/Container/Container";
// import call from "./../../assets/call.png";
// import text from "./../../assets/text.png";
// import video from "./../../assets/video.png";

import { MdAddCall } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";

const Timeline = () => {
    const { timeline, setTimeline } = useContext(AppContexts);
    console.log(timeline, setTimeline);
    return (
        <div className=" py-10 md:py-14 lg:py-20">
            <Container className="max-w-277.5">
                <div>
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">
                        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937]">Timeline</h1>
                        <h4 className="text-base lg:text-lg text-[#64748b]">Filter timeline</h4>
                    </div>
                    <div>
                        <div className="flex flex-col gap-3 mt-5">
                            {
                                timeline.map((info, idx) => (
                                    <div key={idx} className="flex gap-4 items-center bg-white rounded-lg px-4 py-2 shadow-xs">
                                        {/* <img className="w-12" src={info.type === "call" ? call : info.type === "text" ? text : info.type === "video" ? video : ""} alt="Call Icon" /> */}
                                        {info.type === "call" ? <MdAddCall className="text-4xl" /> : info.type === "text" ? <IoDocumentTextSharp className="text-4xl" /> : info.type === "video" ? <FaVideo className="text-4xl" /> : ""}
                                        <div>
                                            <div className="flex gap-2">
                                                <h2 className="text-[#244d3f] text-lg lg:text-xl capitalize font-medium">{info.type}</h2>
                                                <p className="text-[#64748b] lg:text-lg">with {info.meet}</p>
                                            </div>
                                                <p className="text-[#64748b] lg:text-lg">{info.date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Timeline;