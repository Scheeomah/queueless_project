import StatCard from "./StatCard";

function StaffDashboard({
  selectedService,
  setSelectedService,
  queues,
  serveNext,
  skipNumber,
}) {
  const queue = queues[selectedService];

  const services = [
    { name: "Clinic", icon: "🏥" },
    { name: "Salon", icon: "💇" },
    { name: "Bank", icon: "🏦" },
    { name: "Restaurant", icon: "🍽️" },
  ];

  return (
    <main className="px-4 py-10 sm:px-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-medium text-indigo-600">QueueLess Staff</p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Queue Dashboard
            </h2>

            <p className="mt-2 text-slate-500">
              Manage queues and serve customers efficiently.
            </p>
          </div>

          <span className="self-start px-4 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            ● Queue Active
          </span>
        </div>

        <div className="p-5 mt-8 bg-white border shadow-sm rounded-2xl border-slate-200">
          <p className="text-sm font-semibold text-slate-700">
            Select a service
          </p>

          <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-4">
            {services.map((service) => (
              <button
                key={service.name}
                onClick={() => setSelectedService(service.name)}
                className={`p-4 text-left rounded-xl border transition ${
                  selectedService === service.name
                    ? "border-indigo-500 bg-indigo-50 ring-2 ring-indigo-100"
                    : "border-slate-200 bg-white hover:border-indigo-300"
                }`}
              >
                <span className="text-2xl">{service.icon}</span>

                <p className="mt-2 text-sm font-semibold text-slate-800">
                  {service.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Currently Serving"
            value={`#${String(queue.current).padStart(2, "0")}`}
          />

          <StatCard label="People Waiting" value={queue.waiting.length} />

          <StatCard label="Served Today" value={queue.served} />

          <StatCard
            label="Average Wait"
            value={`${queue.waiting.length * 5}m`}
          />
        </div>

        <div className="grid gap-8 mt-10 lg:grid-cols-3">
          <div className="p-6 text-center transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md sm:p-8">
            <p className="text-sm font-medium text-slate-500">
              Currently Serving
            </p>

            <p className="mt-4 text-6xl font-bold text-indigo-600 sm:text-7xl">
              #{String(queue.current).padStart(2, "0")}
            </p>

            <p className="mt-2 text-slate-500">{selectedService} Queue</p>

            <button
              onClick={serveNext}
              disabled={queue.waiting.length === 0}
              className="w-full px-6 py-3 mt-8 font-semibold text-white transition duration-200 bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {queue.waiting.length === 0 ? "Queue Empty" : "Serve Next"}
            </button>
          </div>

          <div className="p-6 transition bg-white border shadow-sm rounded-2xl border-slate-200 hover:shadow-md sm:p-8 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {selectedService} Waiting Queue
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Customers currently waiting
                </p>
              </div>

              <span className="px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 rounded-full">
                {queue.waiting.length} waiting
              </span>
            </div>

            {queue.waiting.length === 0 ? (
              <div className="py-12 text-center">
                <div className="text-4xl">✓</div>

                <p className="mt-3 font-medium text-slate-700">
                  The queue is clear
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  No customers are currently waiting.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-3">
                {queue.waiting.map((number, index) => (
                  <div
                    key={number}
                    className="flex items-center justify-between gap-3 p-4 transition rounded-lg bg-slate-50 hover:bg-slate-100"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-slate-800">
                        #{String(number).padStart(2, "0")}
                      </span>

                      <span className="text-sm text-slate-500">
                        Position {index + 1}
                      </span>
                    </div>

                    <button
                      onClick={() => skipNumber(number)}
                      className="px-4 py-2 text-sm font-medium text-red-600 transition border border-red-200 rounded-lg hover:bg-red-50"
                    >
                      Skip
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default StaffDashboard;
