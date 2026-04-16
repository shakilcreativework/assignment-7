import { useContext } from "react";
import { useParams } from "react-router";
import AppContexts from "../../context/AppContexts";
import Container from "../../shared/Container/Container";
import { FaRegBell } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdAddCall } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { HiVideoCamera } from "react-icons/hi2";

const FriendInfo = () => {
    const friendInfo = useParams();
    const { friends, timeline, setTimeline } = useContext(AppContexts);
    const { id } = friendInfo;
    // console.log(typeof id, id, friends);
    const findFriend = friends.find(friend => friend.id === Number(id));
    const { name, picture, days_since_contact, status, tags, bio, email, goal, next_due_date } = findFriend;
    // console.log(findFriend);

    const handleTimeline = (type) => {
        const { type: category, meet } = type;
        // console.log('clicked', type, meet);
        setTimeline([...timeline, type]);
        toast.success(
            <p className="capitalize text-base font-medium flex items-center gap-2">
                {category === 'call' && <MdAddCall />}
                {category === 'text' && <IoDocumentTextSharp />}
                {category === 'video' && <HiVideoCamera />}
                <span>{meet}</span>
            </p>,
            {
                position: "top-center"
            }
        );
    };


    return (
        <div className=" py-10 md:py-14 lg:py-20">
            <Container>
                <div className="flex flex-col lg:flex-row justify-center gap-4 space-y-4">
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg flex flex-col gap-4 justify-center items-center p-6 shadow-xs">
                            <div className="w-20 h-20">
                                <img className="rounded-full object-cover" src={picture} alt="Friend image" />
                            </div>
                            <h3 className="text-[#1f2937] font-semibold text-lg lg:text-xl capitalize">{name}</h3>
                            <span className={`text-xs text-white py-2 px-4 rounded-full font-medium capitalize ${status === 'almost due' ? 'bg-[#efad44]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'on-track' ? 'bg-[#244d3f]' : ''}`}>{status}</span>
                            <div className="space-x-2">
                                {
                                    tags.map((tag, idx) => <span className="text-xs uppercase py-1 px-3 rounded-full text-[#244d3f] bg-[#cbfadb]" key={idx}>{tag}</span>)
                                }
                            </div>
                            <p className="italic text-[#64748b] text-sm md:text-base">"{bio}"</p>
                            <p className=" text-[#64748b] text-sm">Preferred: {email}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-3 text-[#1f2937] text-base font-medium shadow-xs">
                                <FaRegBell />
                                <h4>Snooze 2 weeks</h4>
                            </div>
                            <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-3 text-[#1f2937] text-base font-medium shadow-xs">
                                <FaBoxArchive />
                                <h4>Archive</h4>
                            </div>
                            <div className="bg-white p-4 rounded-lg flex justify-center items-center gap-3 text-[#ef4444] text-base font-medium shadow-xs">
                                <RiDeleteBin6Line />
                                <h4>Delete</h4>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 space-y-2 shadow-xs">
                                <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl">{days_since_contact}</h2>
                                <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Days Since Contact</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 space-y-2 shadow-xs">
                                <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl">{goal}</h2>
                                <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Goal (Days)</p>
                            </div>
                            <div className="flex flex-col justify-center items-center bg-white rounded-lg p-4 space-y-2 shadow-xs">
                                <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl">{next_due_date}</h2>
                                <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Next Due</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-xs">
                            <div className="flex justify-between gap-4">
                                <h3 className="text-[#244d3f] text-lg lg:text-xl font-medium">Relationship Goal</h3>
                                <span className="text-[#1f2937] bg-[#f8fafc] shadow-xs rounded-sm p-2 px-4">Edit</span>
                            </div>
                            <p className="md:text-lg text-[#64748b]">Connect every <span className="text-[#1f2937] font-bold">30 days</span></p>
                        </div>
                        <div className="p-4 bg-white rounded-lg space-y-3 shadow-xs">
                            <h3 className="text-[#244d3f] text-lg lg:text-xl font-medium">Quick Check-In</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div onClick={() => handleTimeline({
                                    type: "call", meet: name, date: new Date().toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })
                                })} className=" cursor-pointer flex flex-col justify-center items-center bg-[#f8fafc] rounded-lg p-4 space-y-2 shadow-xs">
                                    <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl"><MdAddCall /></h2>
                                    <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Call</p>
                                </div>
                                <div onClick={() => handleTimeline({
                                    type: "text", meet: name, date: new Date().toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })
                                })} className=" cursor-pointer flex flex-col justify-center items-center bg-[#f8fafc] rounded-lg p-4 space-y-2 shadow-xs">
                                    <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl"><IoDocumentTextSharp /></h2>
                                    <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Text</p>
                                </div>
                                <div onClick={() => handleTimeline({
                                    type: "video", meet: name, date: new Date().toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric"
                                    })
                                })} className=" cursor-pointer flex flex-col justify-center items-center bg-[#f8fafc] rounded-lg p-4 space-y-2 shadow-xs">
                                    <h2 className="text-[#244d3f] font-semibold text-2xl lg:text-3xl"><HiVideoCamera /></h2>
                                    <p className=" text-sm md:text-base lg:text-lg text-[#64748b]">Video</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FriendInfo;