import React from "react";
import TokyoItinerary from "./Itinerary/TokyoItinerary";
import OsakaItinerary from "./Itinerary/OsakaItinerary";
import KyotoItinerary from "./Itinerary/KyotoItinerary";

export default function LocationItinerary(props) {
  let location = props.defaultLocation;

  if (location === "Tokyo") {
    return (
      <div className="itineraryContainer mt-4">
        <h2 className="text-center">Itinerary Inspirations</h2>
        <TokyoItinerary />
      </div>
    );
  } else {
    if (location === "Osaka") {
      return (
        <div className="itineraryContainer mt-4">
          <h2 className="text-center">Itinerary Inspirations</h2>
          <OsakaItinerary />
        </div>
      );
    } else {
      if (location === "Kyoto") {
        return (
          <div className="itineraryContainer mt-4">
            <h2 className="text-center">Itinerary Inspirations</h2>
            <KyotoItinerary />
          </div>
        );
      } else {
        return null;
      }
    }
  }
}
