import { BusType, UserTrip } from "@/types/types";
import { Bus, BusFront } from "lucide-react";

interface TripCardProps {
  ride: UserTrip;
}

const cardColors = {
  reducido: "#A0334E",
  normal: "#3362A0",
  express: "#6524AA",
};

export default function TripCard({ ride }: TripCardProps) {
  return (
    <div className="flex rounded-xl overflow-hidden w-full bg-white shadow-md border">
      <div
        style={{ backgroundColor: cardColors[ride.type] }}
        className={`w-3`}
      ></div>
      <div className="flex-1 pl-5 pr-6 py-4 flex gap-3 mt-1 font-medium">
        <div className="flex flex-col max-w-32">
          <span className="text-md font-medium truncate">
            {ride.trip.start.place}
          </span>
          <span className="text-gray-600 text-sm">{ride.trip.start.date}</span>
        </div>
        <div className="flex-1 border-gris-400 border-t border-dashed h-0 self-center"></div>
        <div className="flex flex-col max-w-32">
          <span className="text-md font-medium truncate">
            {ride.trip.end.place}
          </span>
          <span className="text-gray-600 text-sm">{ride.trip.end.date}</span>
        </div>
      </div>
    </div>
  );
}