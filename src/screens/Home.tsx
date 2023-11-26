import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [bills, setBills] = useState([]);
  const ricePrice = 30;
  const meatPrice = 20;
  const eggPrice = 10;
  const fishPrice = 15;
  const rutiPrice = 5;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("bills") || "[]").reverse());
    // sortBills();
  }, []);

  function compare(a: any, b: any) {
    if (new Date(a.date).getTime() < new Date(b.date).getTime()) {
      return -1;
    }
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
      return 1;
    }
    return 0;
  }

  function sortBills() {
    let sortedBills = bills.sort(compare);
    setBills([...sortedBills]);
  }

  // function addBill() {
  //   let bill = {} as any;
  //   bill.date = new Date();
  //   bill.rice = rice;
  //   bill.meat = meat;
  //   bill.egg = egg;
  //   bill.fish = fish;
  //   bill.ruti = ruti;
  //   setBills([...bills, bill]);
  //   localStorage.setItem("bills", JSON.stringify(bills));
  // }

  console.log(bills);

  function getDate(myDate: any) {
    const date = new Date(myDate);
    let day = date.getDate() as any;
    let month = months[date.getMonth()] as any;
    day = day < 10 ? "0" + day : day;
    const today = month + " " + day;
    return today;
  }

  function getTOtal(bill: any) {
    let totalCost =
      bill.rice * ricePrice +
      bill.meat * meatPrice +
      bill.egg * eggPrice +
      bill.fish * fishPrice +
      bill.ruti * rutiPrice;
    return totalCost;
  }

  return (
    <div className="bg-black text-white h-dvh">
      <div className="flex justify-between items-center px-4 py-4  sticky top-0 backdrop-blur z-10 bg-black/70 shadow-2xl shadow-black  ">
        <div className="text-3xl font-semibold text-blue-400 ">Bill Craft</div>
        <Link to="/profile">
          {" "}
          <img
            src="https://avatars.githubusercontent.com/u/98962215?v=4"
            alt=""
            className=" rounded-full h-10 border-2 border-white/50"
          />{" "}
        </Link>
      </div>

      <div className="space-y-3 p-4">
        {bills.map((bill: any) => {
          return (
            <div
              key={Math.random()}
              className="bg-white/5 border border-white/10 p-2.5 rounded-3xl space-y-2 flex justify-between items-center"
            >
              <div className="flex flex-col gap-1 w-[80%] ">
                <div className="ml-1 text-xl font-semibold pb-1 ">
                  {getDate(bill.date)}
                </div>
                <div className="flex gap-2">
                  {bill.rice ? (
                    <div className="flex border bg-[#00e676] border-white/5 rounded-full text-xs font-medium px-3 py-1">
                      Rice{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                  {bill.meat ? (
                    <div className="flex border bg-[#ff4081] border-white/5 rounded-full text-xs font-medium px-3 py-1">
                      Meat{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                  {bill.egg ? (
                    <div className="flex border bg-[#03a9f4] border-white/5 rounded-full text-xs font-medium px-3 py-1">
                      Egg{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                  {bill.fish ? (
                    <div className="flex border bg-[#ff5252] border-white/5 rounded-full text-xs font-medium px-3 py-1">
                      Fish{" "}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="text-lg ml-1">Ruti : {bill.ruti}</div>
                <div className="ml-1 text-sm font-medium bg-white/5 w-full rounded-full h-4">
                  <div
                    className={`h-4 rounded-full bg-[#8866ff]`}
                    style={{ width: `${bill.ruti * 10}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-4xl font-medium mr-1 pb-3 opacity-75 px-2.5 relative">
                {getTOtal(bill) || 0}
                <p className="text-base font-medium text-start top-0 right-0 absolute">
                  &#x20B9;
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-cyan-500 border border-cyan-600 rounded-full fixed bottom-7 right-7 backdrop-blur-3xl shadow-lg shadow-cyan-400/50 ">
        <Link to="/addBill" className="   ">
          <img
            src="./icons/plus.svg"
            alt=""
            className=" invert h-14 aspect-square p-3 "
          />
        </Link>
      </div>
    </div>
  );
}
