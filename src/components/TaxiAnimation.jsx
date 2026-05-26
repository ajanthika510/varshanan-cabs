import taxi from "../assets/taxi.png";

export default function TaxiAnimation() {
  return (
    <>
      {/* Road */}
      <div className="absolute bottom-24 left-0 w-full z-10 overflow-hidden">
        <div className="flex animate-road gap-16">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="w-24 h-2 bg-yellow-400 rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Taxi */}
      <div className="absolute bottom-28 left-[-400px] taxi-drive z-20">
        <img
          src={taxi}
          alt="Taxi"
          className="w-[320px] md:w-[420px] drop-shadow-[0_20px_30px_rgba(250,204,21,0.5)]"
        />
      </div>
    </>
  );
}