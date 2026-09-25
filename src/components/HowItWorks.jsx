function HowItWorks() {
  const benefits = [
    {
      icon: "⏱️",
      title: "Save valuable time",
      description:
        "Join a queue remotely and spend your waiting time doing something more useful.",
      bg: "bg-indigo-50",
      iconBg: "bg-indigo-100",
    },
    {
      icon: "📍",
      title: "Know your position",
      description:
        "See where you are in the queue so you always know how close you are to your turn.",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      icon: "🔔",
      title: "Stay updated",
      description:
        "Keep track of queue movement and know when it is almost time for your turn.",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      icon: "✨",
      title: "Simple and convenient",
      description:
        "Choose a service, join the queue, and manage your visit without unnecessary waiting.",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  return (
    <section className="px-4 py-16 bg-white sm:px-8 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-semibold tracking-wide text-indigo-600 uppercase">
            Why QueueLess?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            A smarter way to wait.
          </h2>

          <p className="mt-4 text-slate-500">
            QueueLess makes waiting more convenient by giving you control over
            your place in line.
          </p>
        </div>

        <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`p-7 rounded-2xl ${benefit.bg} transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 text-xl rounded-xl ${benefit.iconBg}`}
              >
                {benefit.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
