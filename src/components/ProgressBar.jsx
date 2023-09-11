export default function ProgressBar({ name, value, color }) {
  const progressStyle = {
    width: value,
    backgroundColor: color,
  };

  const blurValue = {
    backgroundColor: color,
    opacity: 0.4,
  };

  return (
    <>
      <div className="w-80 mb-5">
        <div className="flex items-center justify-between">
          <span>
            <h2>{name}</h2>
          </span>
          <span>{value}</span>
        </div>
        <div className="w-80 h-[6px] rounded-full bg-white mt-[2px]">
          <div style={progressStyle} className="h-full rounded-full"></div>
        </div>
      </div>
    </>
  );
}
