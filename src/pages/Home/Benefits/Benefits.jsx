// import image
import benImage from "../../../assets/benefits/benefit.jpg";

const benefits = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your parcels delivered quickly with our optimized routes and dedicated courier network ensuring speed and reliability.",
    image: benImage,
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    description:
      "Track every step of your shipment live with our advanced GPS tracking system, giving you complete peace of mind.",
    image: benImage,
  },
  {
    id: 3,
    title: "Zero Hassle",
    description:
      "Enjoy a smooth delivery experience with simple booking, easy payments, and excellent customer support every time.",
    image: benImage,
  },
];

export default function Benefits() {
  return (
    <div className="my-16 px-4">
      {/* Title */}
      <h2 className="text-3xl mb-16 font-bold text-center">Our Benefits</h2>

      {/* Full width stacked cards */}
      <div className="max-w-5xl mx-auto space-y-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="card card-side border-1 bg-base-100 shadow-sm hover:bg-gray-800 hover:shadow-md transition w-full"
          >
            {/* Left image */}
            <figure className="p-4">
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-28 h-28 object-cover rounded-lg"
              />
            </figure>

            {/* Right content with vertical line */}
            <div className="card-body border-l border-gray-300">
              <h3 className="card-title">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
