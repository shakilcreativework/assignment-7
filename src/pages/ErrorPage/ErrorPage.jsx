import { Link } from "react-router";
import Container from "../../shared/Container/Container";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { RiHome9Fill } from "react-icons/ri";


const ErrorPage = () => {

    return (
        <div className="min-h-dvh flex flex-col">

            <Navbar />

            <div className='flex justify-center items-center px-6 flex-1 bg-[#f8fafc] py-6 lg:py-10'>

                <Container>
                    <div className='text-center'>

                        {/* Error Code */}
                        <h1 className="text-8xl font-extrabold btn-c">
                            404
                        </h1>

                        {/* Title */}
                        <h2 className=" text-xl md:text-3xl font-semibold mt-4 text-[#1F1B16]">
                            Oops! Page not found
                        </h2>

                        {/* Description */}
                        <p className="text-[#6F665C] mt-3">
                            The page you're looking for doesn’t exist or has been moved.
                        </p>

                        {/* Button */}
                        <div className="mt-6">
                            <Link className="mx-auto flex items-center justify-center gap-2 capitalize py-2 px-6 rounded-md text-base font-medium transition-all text-white bg-[#244d3f] w-fit"><RiHome9Fill /> Go Home</Link>
                        </div>

                    </div>
                </Container>
            </div>

            <Footer />

        </div>
    );
};

export default ErrorPage;