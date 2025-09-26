// src/components/Services.jsx
import { FaShippingFast, FaGlobeAsia, FaBoxes, FaMoneyBillWave, FaBuilding, FaUndo } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: <FaShippingFast className="text-4xl text-primary" />,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: <FaGlobeAsia className="text-4xl text-primary" />,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: <FaBoxes className="text-4xl text-primary" />,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: <FaMoneyBillWave className="text-4xl text-primary" />,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: <FaBuilding className="text-4xl text-primary" />,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: <FaUndo className="text-4xl text-primary" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-base-100" id="services">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 mb-12 text-gray-600 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle, every time.
        </p>

        {/* Responsive Grid of Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
