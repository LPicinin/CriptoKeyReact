import React from "react";

import '../styles/components/vector_bits.css'

interface VectorBitsParams {
  setVector: Function;
  bits: Array<boolean>;
  rowMatrix: number;
}

export default function VectorBits(Props: VectorBitsParams) {
  const { bits, setVector, rowMatrix } = Props;

  function handleChangeBit(index: number) {
    let vet = Array.from(bits);
    vet[index] = !vet[index];
    setVector(vet, rowMatrix);
  }
  return (
    <div className="vector">
      {bits.map((bit, index) => {
        return (
          <button
            className="w3-black"
            key={index}
            onClick={() => handleChangeBit(index)}
          >
            {bit ? "1" : "0"}
          </button>
        );
      })}
    </div>
  );
}
