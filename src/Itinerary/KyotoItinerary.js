import React from "react";

export default function KyotoItinerary() {
  return (
    <div>
      <div className="row text-center">
        <div className="col-4 border">
          <strong>Kyoto 1</strong>
          <br />
          <p>
            Discover what life was like at this interactive museum. You can
            stroll around a replica Edo period street as it turns from day to
            night.
          </p>
        </div>
        <div className="col-4 border">
          <strong>Kyoto 2</strong>
          <br />
          <p>
            Stroll around the 100 hectares castle grounds and enjoy historical
            presentations on every floor of the castle.
          </p>
        </div>
        <div className="col-4 border">
          <strong>Hydrangea Park</strong>
          <br />
          <p>
            June is Hydrangea season. Many parks have thousands of these
            stunning flowers in rainbow hues. Read our
            <a
              href="https://medium.com/@misskatiemarple/embrace-the-exquisite-hydrangeas-and-vibrant-festivities-of-kansai-this-june-a0707bc02996"
              target="_blank"
              rel="noreferrer"
              className="text-black"
            >
              editorial{" "}
            </a>
            for the best spots.
          </p>
        </div>
      </div>
    </div>
  );
}
