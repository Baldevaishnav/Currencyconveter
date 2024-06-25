import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBox from "./components/InputBox";
import UseCurencyInfo from "./Hooks/UseCurencyInfo";

function App() {
  const [Amount, setAmount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  console.log(from)
  const currencyInfo = UseCurencyInfo(from);

  const currencyOpt = Object.keys(currencyInfo);
  console.log(currencyOpt)
  const Convert = () => {
    setconvertedAmount(Amount * currencyInfo[to]);
  };

   const swap =()=>{
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setconvertedAmount(Amount)
   }
  return (
    <div className="w-full h-screen  flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-400">
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat  bg-slate-500">
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="To"  amount={Amount}  currencyOpt={currencyOpt} selectCurrency={from} onAmoutChange={(amount)=>{setAmount(amount)}}
                  oncurrencyChange={(Currency)=>{setFrom(Currency)}}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                 onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To" amount={convertedAmount}  currencyOpt={currencyOpt} selectCurrency={to} 
                  oncurrencyChange={(Currency)=>{setTo(Currency)}} />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
