export default function Heading({ heading, subHeading }) {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-[#0F0C27]">{heading}</h1>
        <p className="text-base text-[#02A646]">{subHeading}</p>
      </div>
    </>
  );
}
