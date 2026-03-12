"use client";

import Image from "next/image";

interface Venue {
  name: string;
  image: string;
}

export default function VenueCarousel({ venues }: { venues: Venue[] }) {
  return (
    <div className="group overflow-hidden">
      <div
        className="flex gap-4 w-max group-hover:[animation-play-state:paused]"
        style={{
          animation: "venue-scroll 35s linear infinite",
        }}
      >
        {/* Render two copies for seamless loop */}
        {[...venues, ...venues].map((venue, i) => (
          <div
            key={`${venue.name}-${i}`}
            className="relative w-[300px] flex-shrink-0 rounded-lg overflow-hidden"
            style={{ aspectRatio: "3 / 2" }}
          >
            <Image
              src={venue.image}
              alt={venue.name}
              fill
              className="object-cover"
              sizes="300px"
            />
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "45%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              }}
            />
            <span className="absolute bottom-3 left-4 text-white text-[14px] font-medium">
              {venue.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes venue-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
