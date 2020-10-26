import React, { useEffect, useState } from "react";

import "../styles/pages/landing.css";

import VectorBits from "../components/VectorBits";
import Treasure from "../components/Treasure";

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
    let keygen = [
      new Array<boolean>(size).fill(false),
      new Array<boolean>(size).fill(false),
      new Array<boolean>(size).fill(false),
      new Array<boolean>(size).fill(false),
    ];
    //4 - 00100
    keygen[0][2] = true;
    //11 - 01011
    keygen[1][1] = keygen[1][3] = keygen[1][4] = true;
    //9 - 01001
    keygen[2][1] = keygen[2][4] = true;
    //14 - 01110
    keygen[3][1] = keygen[3][2] = keygen[3][3] = true;

    return keygen;
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
