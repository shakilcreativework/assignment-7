import { useContext, useState } from "react";
import AppContexts from "../../context/AppContexts";
import Container from "../../shared/Container/Container";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Timeline = () => {
    const { timeline } = useContext(AppContexts);
    const [showData, setShowData] = useState(timeline);
    // console.log(typeof showData, showData);

    // filter handle
    const filterHandle = (type) => {
        if (type === "all") {
            setShowData(timeline);
        } else {
            const filtered = timeline.filter(item => item.type === type);
            setShowData(filtered);
        }
    };

    return (
        <div className=" py-10 md:py-14 lg:py-20">
            <Container className="max-w-277.5">
                <div>
                    <div className="space-y-4 md:space-y-5 lg:space-y-6">
                        <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f2937]">Timeline</h1>
                        <div className="relative w-fit">
                            <select
                                onChange={(e) => filterHandle(e.target.value)}
                                className="appearance-none bg-white text-[#64748b] px-4 py-2 pr-10 rounded-sm 
                                border border-gray-200 
                                focus:outline-none cursor-pointer shadow-xs"
                                defaultValue="Filter timeline"
                            >
                                <option className="text-gray-200" disabled={true}>Filter timeline</option>
                                <option value="all">All</option>
                                <option value="call">Call</option>
                                <option value="text">Text</option>
                                <option value="video">Video</option>
                            </select>

                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <MdOutlineKeyboardArrowDown />
                            </span>
                        </div>
                    </div>
                    <div>
                        {
                            showData.length === 0 ?
                                <div className="bg-white rounded-lg mt-10 h-20 flex justify-center items-center">
                                    <p className="text-[#64748b] text-lg lg:text-xl">You don’t have any timeline history yet.</p>
                                </div>
                                :
                                <div className="flex flex-col gap-3 mt-5">
                                    {
                                        showData.map((info, idx) => (
                                            <div key={idx} className="flex gap-4 items-center bg-white rounded-lg px-4 py-2 shadow-xs">
                                                <img className="w-12" src={info.type === "call" ? 'https://i.ibb.co.com/TMKdG4F9/phone.png' : info.type === "text" ? 'https://i.ibb.co.com/d4MZRCX1/text.png' : info.type === "video" ? 'https://i.ibb.co.com/pcSn7d3/3d-video.png' : ""} alt="Call Icon" />
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
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Timeline;