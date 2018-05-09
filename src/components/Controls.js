import React, { Fragment } from "react";
import icons from "./icons";
import { sequanceArray } from "./Grid";

const selectPrime = (prime, setPrimes, chosenPrimes) => () =>
  setPrimes([...chosenPrimes, prime]);

export default function Controls({ setPrimes, chosenPrimes }) {
  const primes = [2, 3];
  const primeEls = primes.map(prime => (
    <div onClick={selectPrime(prime, setPrimes, chosenPrimes)}> {prime}</div>
  ));
  const chosenPrimeEls = chosenPrimes.map(prime => <div> {prime}</div>);
  const mainControls = <div className="controls">{primeEls}</div>;

  return (
    <div className="controls">
      <div className="prime-box">{primeEls}</div>
      <div className="product-box">{chosenPrimeEls}</div>
    </div>
  );
}
