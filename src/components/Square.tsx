import { SquareValue } from "~/models/Board";
import { XIcon, OIcon } from "./SVGs";

function Square({ value, onClick }: { value: SquareValue; onClick: () => void }) {
  var classCard = "card ";
  var classFront = "card__face ";
  switch (value) {
    case SquareValue.X:
      classCard += "is-flipped";
      classFront += "card__face--frontX";
      break;
    case SquareValue.O:
      classCard += "is-flipped";
      classFront += "card__face--frontO";
      break;
    default:
      break;
  }

  return (
    <div className="scene">
      <div onClick={onClick} className={classCard}>
        <div className={classFront}>
          {value === SquareValue.X && <XIcon fill="hsl(197, 93%, 30%)" />}
          {value === SquareValue.O && <OIcon fill="hsl(355, 98%, 30%)" />}
        </div>
        <div className="card__face card__face--back"></div>
      </div>
    </div>
  );
}

export default Square;
