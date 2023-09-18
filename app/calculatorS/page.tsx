import CalculatorButton, { ButtonType } from "./_components/calculatorButton";

enum ButtonColours {
  "Gray",
  "Orange",
  "DarkGray",
}

enum ButtonSize {
  "Single",
  "Double",
}

type TCalculatorSymbols = {
  name: String;
  colour: ButtonColours;
  size: ButtonSize;
};

const calculatorSymbols: Array<TCalculatorSymbols> = [
  {
    name: "C",
    colour: ButtonColours.Gray,
    size: ButtonSize.Single,
  },
  {
    name: "+/-",
    colour: ButtonColours.Gray,
    size: ButtonSize.Single,
  },
  {
    name: "%",
    colour: ButtonColours.Gray,
    size: ButtonSize.Single,
  },
  {
    name: "÷",
    colour: ButtonColours.Orange,
    size: ButtonSize.Single,
  },
  {
    name: "7",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "8",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "9",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "×",
    colour: ButtonColours.Orange,
    size: ButtonSize.Single,
  },
  {
    name: "4",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "5",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "6",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "-",
    colour: ButtonColours.Orange,
    size: ButtonSize.Single,
  },
  {
    name: "1",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "2",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "3",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "+",
    colour: ButtonColours.Orange,
    size: ButtonSize.Single,
  },
  {
    name: "0",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Double,
  },
  {
    name: ".",
    colour: ButtonColours.DarkGray,
    size: ButtonSize.Single,
  },
  {
    name: "=",
    colour: ButtonColours.Orange,
    size: ButtonSize.Single,
  },
];

const functions = ["C", "±", "%"];
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const operations = ["÷", "x", "+", "-", "="];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#1c1c1c]">
      <div className="calculatorMainBody">
        <div className="calculatorScreen flex justify-end text-7xl text-white font-light">
          300
        </div>
        <div className="flex">
          <div className="calcFuncs grid grid-cols-3">
            {functions.map((name, idx) => (
              <CalculatorButton
                key={`calc-button-${idx}`}
                name={name}
                buttonType={ButtonType.Function}
              />
            ))}
            {numbers.map((number, idx) => (
              <CalculatorButton
                key={`calc-button-${idx}`}
                name={number.toString()}
              />
            ))}
            <CalculatorButton name="0" isDouble />
            <CalculatorButton name="." />
          </div>
          <div className="calcOps flex flex-col">
            {operations.map((name, idx) => (
              <CalculatorButton
                key={`calc-button-${idx}`}
                name={name}
                buttonType={ButtonType.Operation}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
