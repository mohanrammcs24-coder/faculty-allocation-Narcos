const StatCard = ({ label, value, icon: Icon, trend }) => {
  return (
    <div className="card-surface p-5 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-1">{value}</h3>
        {trend && <p className="text-xs text-green-500 mt-1">{trend}</p>}
      </div>
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
        <Icon size={20} />
      </div>
    </div>
  );
};

export default StatCard;
