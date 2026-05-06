import React from "react";

export default function ContactMap() {
  return (
    <section className="overflow-hidden mt-10 md:mt-[130px] w-full">
      <div className="relative w-full h-[240px] sm:h-[450px] md:h-[540px] lg:h-[700px] xl:h-[700px] mx-auto xl:rounded-lg overflow-hidden">
        {(() => {
          const address =
            "House - 69 , Road - 06 , Block - A , Mirpur - 12 , Dhaka - 1216";
          const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
            address
          )}&output=embed`;

          return (
            <iframe
              className="map-iframe w-full h-full block"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          );
        })()}
      </div>
    </section>
  );
}
