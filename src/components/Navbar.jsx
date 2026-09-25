function Navbar({ staffView, setStaffView }) {
  return (
    <nav className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between max-w-7xl px-4 py-5 mx-auto sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-indigo-600 rounded-xl shadow-sm">
            Q
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              QueueLess
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Smart queue management
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 md:block">
            {staffView ? "Business Dashboard" : "Customer Portal"}
          </span>

          <button
            onClick={() => setStaffView(!staffView)}
            className="px-4 py-2.5 text-sm font-semibold text-indigo-600 transition bg-indigo-50 rounded-xl hover:bg-indigo-100 sm:px-5"
          >
            {staffView ? "Customer View" : "Staff View"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
