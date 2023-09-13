export default function Headingwhite({ heading, subHeading }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-[#FFAB00]">{heading}</h1>
        <p className="text-base text-[#ffffff]">{subHeading}</p>
      </div>
    </>
  );
}
