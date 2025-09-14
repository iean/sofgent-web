import React from "react";

export default function ContactMap() {
  return (
    <section className="overflow-hidden mt-10 md:mt-[130px] w-full">
      <div className="relative w-full h-[240px] sm:h-[450px] md:h-[540px] lg:h-[700px] xl:h-[700px] mx-auto xl:rounded-lg overflow-hidden">
        <iframe
          className="map-iframe w-full h-full block"
          src="https://www.google.com/maps/d/embed?mid=1hPZlx7IzAPJ3ss2IAz8v2xVInwgYJ6Y&ehbc=2E312F"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
