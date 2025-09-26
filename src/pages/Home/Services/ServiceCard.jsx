// src/components/ServiceCard.jsx
export default function ServiceCard({ service }) {
    const { icon, title, description } = service;
  return (
    <div className="card bg-base-200 hover:bg-gray-800 shadow-xl hover:shadow-2xl transition duration-300">
      <div className="card-body items-center text-center">
        {icon}
        <h3 className="card-title mt-4">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
