import React from "react";

export default function KyotoItinerary() {
  return (
    <div>
      <div className="row text-center">
        <div className="col-4 border">
          <strong>Arashiyama</strong>
          <br />
          <p>
            Stroll along paths that weave their way through this world-famous
            bamboo forest. Make it to the top and you'll find a monkey park.
          </p>
        </div>
        <div className="col-4 border">
          <strong>Gion District</strong>
          <br />
          <p>
            Interested in Japanese culture and history? There are many shrines
            to enjoy, traditional tea ceremonies galore, and if you're lucky you
            might spot a Geisha.
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
              {" "}
              editorial{" "}
            </a>
            for the best options.
          </p>
        </div>
      </div>
    </div>
  );
}
