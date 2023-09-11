export default function FramewordCard({ icon, text, iconColor }) {
  return (
    <>
      <div className="card w-40 h-32 flex items-center justify-center shadow rounded bg-white p-5 mb-5">
        <div className="text-center">
          <span style={{ color: iconColor }} className="text-4xl">
            {icon}
          </span>
          {text}
        </div>
      </div>
    </>
  );
}
