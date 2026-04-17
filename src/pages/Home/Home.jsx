import { lazy, Suspense, useContext } from 'react';
import Container from '../../shared/Container/Container';
import { Link } from 'react-router';
import { FaPlus } from 'react-icons/fa';
import AppContexts from '../../context/AppContexts';
const FriendCard = lazy(() => import('../../components/FriendCard/FriendCard'));

const Home = () => {
    const { friends } = useContext(AppContexts);
    // console.log(friends);
    return (
        <div className=" py-10 md:py-14 lg:py-20">
            <Container>
                <div className='space-y-10'>
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <h1 className=' text-3xl md:text-4xl lg:text-5xl text-[#1f2937] font-bold'>Friends to keep close in your life</h1>
                        <p className='text-sm md:text-base text-[#64748b]'>our personal shelf of meaningful connections. Browse, tend, and nurture the <br className='hidden md:block' />
                            relationships that matter most.</p>
                        <Link className="flex items-center justify-center gap-2 capitalize py-2 px-6 rounded-md text-base font-medium transition-all text-white bg-[#244d3f] w-fit"><FaPlus /> Add a Friend</Link>
                    </div>
                    <div className='space-y-10'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6'>
                            <div className='bg-white space-y-2 flex flex-col justify-center items-center text-center rounded-lg p-5 lg:p-6 xl:p-7 shadow-xs'>
                                <h3 className=' text-xl md:text-2xl lg:text-3xl text-[#244d3f] font-semibold'>10</h3>
                                <p className='font-normal text-sm md:text-base lg:text-lg text-[#64748b]'>Total Friends</p>
                            </div>
                            <div className='bg-white space-y-2 flex flex-col justify-center items-center text-center rounded-lg p-5 lg:p-6 xl:p-7 shadow-xs'>
                                <h3 className=' text-xl md:text-2xl lg:text-3xl text-[#244d3f] font-semibold'>3</h3>
                                <p className='font-normal text-sm md:text-base lg:text-lg text-[#64748b]'>On Track</p>
                            </div>
                            <div className='bg-white space-y-2 flex flex-col justify-center items-center text-center rounded-lg p-5 lg:p-6 xl:p-7 shadow-xs'>
                                <h3 className=' text-xl md:text-2xl lg:text-3xl text-[#244d3f] font-semibold'>6</h3>
                                <p className='font-normal text-sm md:text-base lg:text-lg text-[#64748b]'>Need Attention</p>
                            </div>
                            <div className='bg-white space-y-2 flex flex-col justify-center items-center text-center rounded-lg p-5 lg:p-6 xl:p-7 shadow-xs'>
                                <h3 className=' text-xl md:text-2xl lg:text-3xl text-[#244d3f] font-semibold'>12</h3>
                                <p className='font-normal text-sm md:text-base lg:text-lg text-[#64748b]'>Interactions This Month</p>
                            </div>
                        </div>
                        <hr className='text-[#e9e9e9]' />
                        <h3 className=' text-lg md:text-xl lg:text-2xl text-[#1f2937] font-semibold'>Your Friends</h3>
                    </div>
                </div>
                <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mt-6'>
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend} />)
                        }
                    </div>
                </Suspense>
                {/* <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                </Suspense> */}
            </Container>
        </div>
    );
};

export default Home;