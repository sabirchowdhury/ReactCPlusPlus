import classNames from "classnames";

export enum ButtonType {
  "Number",
  "Operation",
  "Function",
}

interface TCalculatorButton {
  onClick?: () => void;
  name: String;
  buttonType?: ButtonType;
  isDouble?: Boolean;
}

const CalculatorButton = ({
  name,
  onClick,
  buttonType = ButtonType.Number,
  isDouble,
}: TCalculatorButton) => (
  <div
    onClick={onClick}
    className={classNames("flex p-5 m-2 text-4xl rounded-full cursor-pointer", {
      "bg-orange-400 text-white hover:bg-orange-300 active:bg-orange-500":
        buttonType === ButtonType.Operation,
      "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900":
        buttonType === ButtonType.Number,
      "bg-gray-500 text-black hover:bg-gray-400 active:bg-gray-600":
        buttonType === ButtonType.Function,
      "w-20 align-middle": !isDouble,
      "col-span-2": isDouble,
    })}
  >
    <div className="flex flex-col justify-center w-10 h-10 text-center">
      {name}
    </div>
  </div>
);

export default CalculatorButton;
