import React, { useEffect, useState } from "react";

import "../styles/pages/landing.css";

import VectorBits from "../components/VectorBits";
import Treasure from "../components/Treasure";
import Data from "../data"

export default function Landing() {
  const size = 5;
  const secretKey = getKeyOpen();
  const [openTreasure, setOpenTreasure] = useState(false);
  const [vbits, setVBits] = useState<Array<boolean[]>>([
    new Array<boolean>(size).fill(false),
    new Array<boolean>(size).fill(false),
    new Array<boolean>(size).fill(false),
    new Array<boolean>(size).fill(false),
  ]);

  function handleChangeBit(bits: Array<boolean>, rowMatrix: number) {
    let vet = Array.from(vbits);
    vet[rowMatrix] = bits;
    setVBits(vet);
    theMimeAwakened(vet);
  }

  function theMimeAwakened(keys: Array<boolean[]>) {
    setOpenTreasure(JSON.stringify(keys) === JSON.stringify(secretKey));
  }

  function getKeyOpen() {
    //4 - 00100
    //11 - 01011
    //9 - 01001
    //14 - 01110
    return Data['key'];
  }

  useEffect(() => {}, []);

  return (
    <div id="landing">
      {vbits.map((bitsp, index) => {
        return (
          <div className="vector-list" key={index}>
            <VectorBits
              bits={bitsp}
              rowMatrix={index}
              setVector={handleChangeBit}
            />
          </div>
        );
      })}

      <Treasure isOpen={openTreasure} />
    </div>
  );
}
