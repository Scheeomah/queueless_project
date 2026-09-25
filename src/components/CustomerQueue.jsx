function CustomerQueue({
  selectedService,
  currentNumber,
  waitingNumbers,
  myQueueNumber,
  leaveQueue,
}) {
  const peopleAhead = Math.max(0, myQueueNumber - currentNumber - 1);

  const estimatedWait = peopleAhead * 5;

  const isMyTurn = myQueueNumber === currentNumber;

  return (
    <main className="relative flex items-center justify-center min-h-[calc(100vh-81px)] px-4 py-12 overflow-hidden sm:px-6 sm:py-16">
      <div className="absolute w-72 h-72 bg-indigo-200 rounded-full -top-24 -left-24 opacity-30 blur-3xl" />

      <div className="absolute w-72 h-72 bg-blue-200 rounded-full -right-24 -bottom-24 opacity-30 blur-3xl" />

      <div className="relative w-full max-w-xl">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            You're in the queue
          </span>
        </div>

        <div className="overflow-hidden bg-white border shadow-xl rounded-3xl border-slate-200">
          <div className="px-6 py-6 text-center bg-indigo-600 sm:px-10">
            <p className="text-sm font-medium tracking-wide text-indigo-100 uppercase">
              {selectedService} Queue
            </p>

            <p className="mt-2 text-indigo-100">Your queue number</p>

            <h2 className="mt-2 text-7xl font-black tracking-tight text-white sm:text-8xl">
              #{String(myQueueNumber).padStart(2, "0")}
            </h2>
          </div>

          <div className="p-6 sm:p-10">
            {isMyTurn ? (
              <div className="p-6 text-center bg-green-50 border border-green-200 rounded-2xl">
                <div className="text-4xl">🎉</div>

                <p className="mt-3 text-xl font-bold text-green-800">
                  It's your turn!
                </p>

                <p className="mt-2 text-sm text-green-700">
                  Please proceed to the {selectedService}.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-lg font-semibold text-slate-800">
                    You're on your way!
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    We'll let you know when your turn is approaching.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-5 text-center border rounded-2xl border-blue-100 bg-blue-50">
                    <p className="text-3xl font-bold text-blue-700">
                      {peopleAhead}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">People ahead</p>
                  </div>

                  <div className="p-5 text-center border rounded-2xl border-purple-100 bg-purple-50">
                    <p className="text-3xl font-bold text-purple-700">
                      {estimatedWait}m
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Estimated wait
                    </p>
                  </div>
                </div>

                {peopleAhead <= 2 && (
                  <div className="flex gap-3 p-4 mt-8 border border-amber-100 bg-amber-50 rounded-2xl">
                    <span className="text-lg">🔔</span>

                    <div>
                      <p className="text-sm font-semibold text-amber-900">
                        Almost your turn!
                      </p>

                      <p className="mt-1 text-xs text-amber-700">
                        Please stay nearby so you don't miss your turn.
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            <button
              onClick={leaveQueue}
              className="w-full py-3.5 mt-8 font-semibold text-red-600 transition border border-red-200 rounded-xl hover:bg-red-50"
            >
              Leave Queue
            </button>
          </div>
        </div>

        <p className="mt-5 text-sm text-center text-slate-400">
          QueueLess • No more waiting around
        </p>
      </div>
    </main>
  );
}

export default CustomerQueue;
