import React from "react";

const InputBox = ({
  label,
  amount,
  currencyOpt = [],
  oncurrencyChange,
  onAmoutChange,
  selectCurrency = "usd",
}) => {
  return (
    <div>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block">{label}</label>
          <input
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            value={amount}
            onChange={(e) => {
              onAmoutChange && onAmoutChange(e.target.value);
            }}
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => {
              oncurrencyChange && oncurrencyChange(e.target.value);
            }}
          >
            {currencyOpt.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
