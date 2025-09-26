import Marquee from "react-fast-marquee";

// import logo
import logo from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/casio.png";
import logo3 from "../../../assets/brands/moonstar.png";
import logo4 from "../../../assets/brands/randstad.png";
import logo5 from "../../../assets/brands/amazon_vector.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const logos = [ logo, logo2, logo3, logo4, logo5, logo6, logo7 ]

const ClientLogoBrand = () => {
    return (
        <section className="py-10 bg-base-200">
            <div className="mx-auto px-2">
                <h2 className="text-2xl font-bold text-center mb-6">Trusted by Leading Brands</h2>

                <Marquee>
                    {
                        logos.map((logo, index) => (
                            <div key={index} className="mx-24 flex items-center">
                                <img className="h-6 object-contain" src={logo} alt={`Client logo ${index + 1}`} />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </section>
    );
};

export default ClientLogoBrand;