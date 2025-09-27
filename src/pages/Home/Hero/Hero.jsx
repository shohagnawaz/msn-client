// import image
import img from "../../../assets/benefits/benefit.jpg";

const Hero = () => {
  return (
    <div data-aos="zoom-in-up" className="hero bg-gray-800 rounded-4xl p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="py-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, impedit minus voluptatibus esse distinctio rem possimus corporis tempora labore eveniet maxime praesentium cum perspiciatis atque dolore, repellat beatae rerum. Quas.
          </p>
          <button className="btn rounded-2xl btn-primary">Lorem Ispum</button>
          <button className="btn rounded-2xl ms-4 btn-primary btn-outline">Lorem Ispum</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
