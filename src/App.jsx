import { useState } from "react";
import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";
import CustomerQueue from "./components/CustomerQueue";
import StaffDashboard from "./components/StaffDashboard";
import HowItWorks from "./components/HowItWorks";

function App() {
  const [selectedService, setSelectedService] = useState("");
  const [joinedQueue, setJoinedQueue] = useState(false);
  const [staffView, setStaffView] = useState(false);
  const [myQueueNumber, setMyQueueNumber] = useState(null);

  const [queues, setQueues] = useState({
    Clinic: {
      current: 7,
      waiting: [8, 9, 10, 11],
      served: 24,
    },

    Salon: {
      current: 12,
      waiting: [13, 14, 15],
      served: 18,
    },

    Bank: {
      current: 21,
      waiting: [22, 23],
      served: 31,
    },

    Restaurant: {
      current: 5,
      waiting: [6, 7, 8, 9, 10],
      served: 16,
    },
  });

  const services = [
    { name: "Clinic", icon: "🏥" },
    { name: "Salon", icon: "💇" },
    { name: "Bank", icon: "🏦" },
    { name: "Restaurant", icon: "🍽️" },
  ];

  function joinQueue() {
    if (!selectedService) return;

    const queue = queues[selectedService];

    const highestNumber = Math.max(queue.current, ...queue.waiting);

    const newNumber = highestNumber + 1;

    setQueues((previousQueues) => ({
      ...previousQueues,
      [selectedService]: {
        ...queue,
        waiting: [...queue.waiting, newNumber],
      },
    }));

    setMyQueueNumber(newNumber);
    setJoinedQueue(true);
  }

  function leaveQueue() {
    setJoinedQueue(false);
    setSelectedService("");
    setMyQueueNumber(null);
  }

  function serveNext() {
    const service = selectedService || "Clinic";
    const queue = queues[service];

    if (!queue || queue.waiting.length === 0) return;

    const nextNumber = queue.waiting[0];

    setQueues((previousQueues) => ({
      ...previousQueues,
      [service]: {
        ...queue,
        current: nextNumber,
        waiting: queue.waiting.slice(1),
        served: queue.served + 1,
      },
    }));
  }

  function skipNumber(number) {
    const service = selectedService || "Clinic";
    const queue = queues[service];

    if (!queue) return;

    setQueues((previousQueues) => ({
      ...previousQueues,
      [service]: {
        ...queue,
        waiting: queue.waiting.filter((item) => item !== number),
      },
    }));
  }

  const activeService = selectedService || "Clinic";
  const selectedQueue = queues[activeService];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        staffView={staffView}
        setStaffView={(value) => {
          setStaffView(value);

          if (value && !selectedService) {
            setSelectedService("Clinic");
          }
        }}
      />

      {staffView ? (
        <StaffDashboard
          selectedService={activeService}
          setSelectedService={setSelectedService}
          queues={queues}
          serveNext={serveNext}
          skipNumber={skipNumber}
        />
      ) : !joinedQueue ? (
        <main className="relative overflow-hidden">
          <div className="absolute w-72 h-72 bg-indigo-200 rounded-full -top-24 -left-24 opacity-40 blur-3xl" />

          <div className="absolute w-80 h-80 bg-purple-200 rounded-full top-40 -right-32 opacity-40 blur-3xl" />

          <section className="relative px-4 py-20 sm:px-8 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Hero text */}
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                    Smart queue management
                  </span>

                  <h2 className="mt-6 text-5xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl">
                    Skip the waiting.
                    <span className="block text-indigo-600">
                      Keep your place.
                    </span>
                  </h2>

                  <p className="max-w-xl mt-6 text-lg leading-8 text-slate-600">
                    Join a queue digitally, track your position, and spend your
                    waiting time doing something more useful.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <span className="px-4 py-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
                      ✓ No standing in line
                    </span>

                    <span className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                      ✓ Real-time updates
                    </span>
                  </div>
                </div>

                {/* Styled visual */}
                <div className="relative">
                  <div className="absolute w-64 h-64 bg-indigo-200 rounded-full -top-10 -right-10 opacity-40 blur-3xl" />

                  <div className="relative p-8 bg-white border shadow-xl rounded-3xl border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-indigo-600">
                          QUEUELESS
                        </p>

                        <h3 className="mt-1 text-2xl font-bold text-slate-900">
                          Your time matters.
                        </h3>
                      </div>

                      <div className="flex items-center justify-center w-12 h-12 text-xl bg-indigo-100 rounded-2xl">
                        ⏱️
                      </div>
                    </div>

                    <div className="p-5 mt-8 bg-slate-50 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 font-bold text-white bg-indigo-600 rounded-xl">
                          01
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            Choose your service
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Select where you need to go.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 mt-3 bg-slate-50 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 font-bold text-indigo-600 bg-indigo-100 rounded-xl">
                          02
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            Join the queue
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Get your place instantly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 mt-3 bg-slate-50 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 font-bold text-purple-600 bg-purple-100 rounded-xl">
                          03
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            Track your turn
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            Know when it's almost your turn.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 mt-6 border border-green-100 bg-green-50 rounded-2xl">
                      <span className="flex items-center justify-center w-8 h-8 text-green-600 bg-green-100 rounded-full">
                        ✓
                      </span>

                      <p className="text-sm font-medium text-green-800">
                        No more standing around.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-20 text-center">
                <h3 className="text-3xl font-bold text-slate-900">
                  What service do you need?
                </h3>

                <p className="mt-3 text-slate-500">
                  Pick a service and join the queue in seconds.
                </p>

                <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto mt-10 sm:grid-cols-2 lg:grid-cols-4">
                  {services.map((service) => (
                    <ServiceCard
                      key={service.name}
                      service={service}
                      selectedService={selectedService}
                      setSelectedService={setSelectedService}
                    />
                  ))}
                </div>

                {selectedService && (
                  <button
                    onClick={joinQueue}
                    className="px-8 py-4 mt-10 font-bold text-white transition duration-200 bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 hover:-translate-y-0.5"
                  >
                    Join {selectedService} Queue →
                  </button>
                )}
              </div>
            </div>
          </section>

          <HowItWorks />
        </main>
      ) : (
        <CustomerQueue
          selectedService={activeService}
          currentNumber={selectedQueue.current}
          waitingNumbers={selectedQueue.waiting}
          myQueueNumber={myQueueNumber}
          leaveQueue={leaveQueue}
        />
      )}
    </div>
  );
}

export default App;
