import React from "react";

import OpenTreasure from "../images/chests_open.png";
import ClosedTreasure from "../images/chests_closed.png";

import '../styles/components/treasure.css'

interface TreasureParams {
  isOpen: boolean;
}

export default function Treasure(params: TreasureParams) {
  const { isOpen } = params;
  return (
    <div>
      {isOpen ? (
        <div className="treasure">
          <img src={OpenTreasure} alt="Open Treasure" />
          <p>Baú Aberto!!!</p>
        </div>
      ) : (
        <div className="treasure">
          <img src={ClosedTreasure} alt="Closed Treasure" />
          <p>Baú Fechado resolva o a senha para abrir!!!</p>
        </div>
      )}
    </div>
  );
}
