import Button from "../component/Button";
import Check from "../component/Check";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getDate } from "../constants";
import ButtonBox from "../component/ButtonBox";

export default function AddBill() {
  const [rice, setRice] = useState(false);
  const [meat, setMeat] = useState(false);
  const [fish, setFish] = useState(false);
  const [egg, setEgg] = useState(false);
  const [ruti, setRuti] = useState(5);
  const [date, setDate] = useState(new Date()) as any;
  const [click, setClick] = useState(false) as any;

  const [bills, setBills] = useState([]) as any;

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("bills") || "[]"));
  }, []);

  function addBill() {
    let bill = {} as any;
    bill.date = date;
    bill.rice = rice;
    bill.meat = meat;
    bill.egg = egg;
    bill.fish = fish;
    bill.ruti = ruti;

    if (!bill.rice && !bill.meat && !bill.egg && !bill.fish && !bill.ruti) {
      console.log("invalid");
      return;
    }

    const allBills = [...bills, bill];
    setBills(allBills.sort(compare));
    localStorage.setItem("bills", JSON.stringify(allBills));
    setClick(!click);
  }

  function compare(a: any, b: any) {
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
      return 1;
    }
    if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
      return -1;
    }
    return 0;
  }

  function show() {
    const a = JSON.parse(localStorage.getItem("bills") || "[]");
    console.log(a);
  }

  console.log(date.toLocaleDateString("en-CA"));

  return (
    <div className="bg-black text-white h-dvh relative p-4">
      <div className="flex justify-between items-center  pb-3 mb-4 ">
        <div className="flex gap-3 items-center ">
          <Link to="/" className="">
            <img
              src="./icons/back.svg"
              alt=""
              className=" h-7 aspect-square  text-accent invert"
            />
          </Link>
          <div className="text-3xl font-semibold text-accent">Bill Craft</div>
        </div>
        <Link to="/profile">
          {" "}
          <img
            src="https://avatars.githubusercontent.com/u/98962215?v=4"
            alt=""
            className=" rounded-full h-10"
          />{" "}
        </Link>
      </div>

      <div
        className={`flex flex-col justify-between min-h-[87dvh] ${
          click ? "opacity-50 blur" : ""
        } `}
        onClick={() => {
          if (click) {
            setClick(!click);
          }
        }}
      >
        <div className="space-y-3 mt-6">
          <div className="bg-white/10 border border-white/5  rounded-2xl">
            <input
              type="date"
              value={date.toLocaleDateString("en-CA")}
              onChange={(e) => {
                setDate(new Date(e.target.value));
              }}
              className="text-xl font-semibold bg-transparent py-4 px-4 w-[95%] outline-none"
            />
          </div>
          {/* <div className="bg-white/10 px-5 py-4 space-y-4 rounded-3xl border-white/5 border-1">
            <Check
              text="Rice"
              // color="bg-[#00e676]"
              onClick={() => {
                setRice(!rice);
              }}
            />
            <hr className="opacity-50" />
            <Check
              text="Meat"
              // color="bg-[#ff4081]"
              onClick={() => {
                setMeat(!meat);
              }}
            />
            <Check
              text="Fish"
              // color="bg-[#03a9f4]"
              onClick={() => {
                setFish(!fish);
              }}
            />
            <Check
              text="Egg"
              color="bg-[#ff5252]"
              onClick={() => {
                setEgg(!egg);
              }}
            />
          </div> */}
          <div className="bg-white/10 px-5 py-4 rounded-3xl border-white/5 border-1 grid grid-cols-2 gap-4">
            <ButtonBox
              text="Rice"
              onClick={() => setRice(!rice)}
              food={rice}
              color="bg-[#00e676]"
            />
            <ButtonBox
              text="Meat"
              onClick={() => setMeat(!meat)}
              food={meat}
              color="bg-[#ff4081]"
            />
            <ButtonBox
              text="Fish"
              onClick={() => setFish(!fish)}
              food={fish}
              color="bg-[#03a9f4]"
            />
            <ButtonBox
              text="Egg"
              onClick={() => setEgg(!egg)}
              food={egg}
              color="bg-[#ff5252]"
            />
          </div>
          <div className=" bg-white/10 p-4 rounded-3xl">
            <div>
              <h1 className="text-lg font-medium pb-4"> Ruti: {ruti}</h1>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="text-xs">0</div>
                <div className="text-xs">2</div>
                <div className="text-xs">4</div>
                <div className="text-xs">6</div>
                <div className="text-xs">8</div>
                <div className="text-xs">10</div>
              </div>
              <div className="pb-2 ">
                <div className="border-2 border-white/10"></div>
                <div className="flex justify-between   ">
                  <div className="border-2 border-white/10"></div>
                  <div className="border-2 border-white/10"></div>
                  <div className="border-2 border-white/10"></div>
                  <div className="border-2 border-white/10"></div>
                  <div className="border-2 border-white/10"></div>
                  <div className="border-2 border-white/10"></div>
                </div>
              </div>
            </div>
            <div className="">
              <input
                type="range"
                min={0}
                max={10}
                value={ruti}
                onChange={(e) => {
                  setRuti(Number(e.target.value));
                }}
                className="slider"
              />
            </div>
          </div>
        </div>
        <div>
          <Button text="Add" onClick={addBill} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        {click ? popUp() : <></>}
      </div>
    </div>
  );
}

function popUp() {
  return (
    <div className="absolute bottom-4 bg-white/10 pt-10 pb-5 px-5 backdrop-blur-md rounded-xl object-none w-[92%]">
      <div className="text-xl font-semibold text-center mb-28">
        Your Bill is Added{" "}
      </div>
      <Button
        onClick={() => {
          window.history.back();
        }}
      />
    </div>
  );
}
