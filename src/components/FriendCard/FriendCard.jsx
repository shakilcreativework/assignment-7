
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
    // console.log(friend);
    const { id, name, picture, days_since_contact, status, tags } = friend;
    return (
        <Link to={`/friendInfo/${id}`}>
        <div className="bg-white rounded-lg flex flex-col gap-4 justify-center items-center p-6 shadow-xs">
            <div className="w-20 h-20">
                <img className="rounded-full object-cover" src={picture} alt="Friend image" />
            </div>
            <h3 className="text-[#1f2937] font-semibold text-lg lg:text-xl capitalize">{name}</h3>
            <span className="text-[#64748b] text-xs">{days_since_contact}d ago</span>
            <div className="space-x-2">
                {
                    tags.map((tag, idx) => <span className="text-xs uppercase py-1 px-3 rounded-full text-[#244d3f] bg-[#cbfadb]" key={idx}>{tag}</span>)
                }
            </div>
            <span className={`text-xs text-white py-2 px-4 rounded-full font-medium capitalize ${status === 'almost due' ? 'bg-[#efad44]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'on-track' ? 'bg-[#244d3f]' : ''}`}>{status}</span>
        </div>
        </Link>
    );
};

export default FriendCard;