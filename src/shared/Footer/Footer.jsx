import logo from "./../../assets/logo-xl.png"
import Container from '../Container/Container';
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-20 pb-5 bg-[#244d3f]">
            <Container>
                <div className="space-y-5">
                    <div className='flex flex-col justify-center items-center gap-3'>
                        <div className="w-35">
                            <img src={logo} alt="" />
                        </div>
                        <p className="text-sm md:text-base text-white">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                        <h4 className=" text-base md:text-lg lg:text-xl text-white font-medium">Social Links</h4>
                        <div className="flex justify-center items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center gap-3">
                                <Link className="text-xl" to="/"><FaInstagram /></Link>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center gap-3">
                                <Link className="text-xl" to="/"><FaFacebookF /></Link>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center gap-3">
                                <Link className="text-xl" to="/"><FaTwitter /></Link>
                            </div>
                        </div>
                    </div>
                    <hr className="text-[#1a8862]" />
                    <div className="flex justify-between items-center gap-3 text-sm text-[#fafafa]">
                        <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
                        <div className="flex justify-center items-center gap-3">
                            <Link to="/"><span>Privacy Policy</span></Link>
                            <Link to="/"><span>Terms of Service</span></Link>
                            <Link to="/"><span>Cookies</span></Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;