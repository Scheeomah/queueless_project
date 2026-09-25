function ServiceCard({ service, selectedService, setSelectedService }) {
  const colors = {
    Clinic: {
      icon: "bg-blue-100",
      text: "text-blue-600",
      hover: "hover:border-blue-300",
      ring: "ring-blue-100",
    },
    Salon: {
      icon: "bg-pink-100",
      text: "text-pink-600",
      hover: "hover:border-pink-300",
      ring: "ring-pink-100",
    },
    Bank: {
      icon: "bg-emerald-100",
      text: "text-emerald-600",
      hover: "hover:border-emerald-300",
      ring: "ring-emerald-100",
    },
    Restaurant: {
      icon: "bg-orange-100",
      text: "text-orange-600",
      hover: "hover:border-orange-300",
      ring: "ring-orange-100",
    },
  };

  const color = colors[service.name];

  return (
    <button
      onClick={() => setSelectedService(service.name)}
      className={`group relative overflow-hidden p-7 text-left bg-white border rounded-2xl transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        selectedService === service.name
          ? `border-indigo-500 ring-2 ${color.ring} shadow-lg`
          : `border-slate-200 ${color.hover}`
      }`}
    >
      <div
        className={`flex items-center justify-center w-14 h-14 text-3xl rounded-2xl ${color.icon}`}
      >
        {service.icon}
      </div>

      <p className="mt-6 text-lg font-bold text-slate-900">{service.name}</p>

      <p className="mt-1 text-sm text-slate-500">Join virtual queue</p>

      <div
        className={`flex items-center gap-1 mt-5 text-sm font-semibold ${color.text}`}
      >
        Join queue
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </button>
  );
}

export default ServiceCard;
