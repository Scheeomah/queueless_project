function StatCard({ label, value }) {
  return (
    <div className="p-6 transition bg-white border rounded-xl hover:shadow-md">
      <p className="text-sm text-slate-500">{label}</p>

      <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

export default StatCard;
