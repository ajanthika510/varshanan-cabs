import taxi from "../assets/taxi.png";

export default function TaxiAnimation() {
  return (
    <>
      {/* ROAD */}
      <div className="absolute bottom-20 sm:bottom-24 left-0 w-full z-10 overflow-hidden">

        <div className="flex animate-road gap-10 sm:gap-16">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="w-16 sm:w-24 h-1.5 sm:h-2 bg-yellow-400 rounded-full opacity-80"
            />
          ))}
        </div>

      </div>

      {/* MAIN TAXI */}
      <div className="absolute bottom-24 sm:bottom-28 left-[-400px] taxi-drive z-20">

        <img
          src={taxi}
          alt="Taxi"
          className="
            w-[220px]
            sm:w-[320px]
            md:w-[420px]
            drop-shadow-[0_20px_30px_rgba(250,204,21,0.5)]
          "
        />

      </div>

      {/* SECOND TAXI */}
      <div className="absolute bottom-44 sm:bottom-52 left-[-500px] taxi-drive-slow z-10 opacity-70">

        <img
          src={taxi}
          alt="Taxi"
          className="
            w-[160px]
            sm:w-[220px]
            md:w-[300px]
            scale-x-[-1]
            drop-shadow-[0_10px_20px_rgba(34,211,238,0.4)]
          "
        />

      </div>

      {/* THIRD TAXI */}
      <div className="absolute bottom-8 sm:bottom-12 left-[-600px] taxi-drive-fast z-30 opacity-90">

        <img
          src={taxi}
          alt="Taxi"
          className="
            w-[140px]
            sm:w-[180px]
            md:w-[240px]
            drop-shadow-[0_10px_20px_rgba(255,255,255,0.3)]
          "
        />

      </div>
    </>
  );
}