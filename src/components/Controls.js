import React, { Fragment } from "react";
import icons from "./icons";
import GemHolder from "./GemHolder.js";
import Gem from "./Gem.js";

import "./Controls.css";
import { sequanceArray } from "./Grid";

const selectPrime = (prime, setPrimes, chosenPrimes) => () =>
  setPrimes([...chosenPrimes, prime]);

export default function Controls({ setPrimes, chosenPrimes }) {
  console.log("render controles");
  const primes = [2, 3, 5];
  const primeEls = primes.map(prime => (
    <svg
      viewBox={`0 0 ${40} ${40}`}
      onClick={selectPrime(prime, setPrimes, chosenPrimes)}
    >
      <Gem numPieces={5} color={"red"} size={40} />
      <text x={17} y={24} fontSize={12} fill={"white"}>
        {prime}
      </text>
    </svg>
  ));
  const chosenPrimeEls = chosenPrimes.map((prime, idx) => {
    const doubleIcon =
      idx === chosenPrimes.length - 1 ? null : (
        <svg height="3rem" width="3rem" fill="#777">
          {icons.double}
        </svg>
      );
    return (
      <g>
        <svg height="3rem" width="3rem" viewBox={`0 0 ${40} ${40}`}>
          <Gem numPieces={5} color={"red"} size={40} />
          <text x={17} y={24} fontSize={12} fill={"white"}>
            {prime}
          </text>
        </svg>
        {doubleIcon}
      </g>
    );
  });
  const chosen = <div className="product-box">{chosenPrimeEls}</div>;

  return (
    <div className="controls">
      {chosen}
      <div className="prime-box">{primeEls}</div>
    </div>
  );
}
