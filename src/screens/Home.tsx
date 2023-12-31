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
  }, []);

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
        <div className="text-3xl font-semibold text-accent ">Bill Craft</div>
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
        {!bills.length ? (
          <div className="text-4xl opacity-20 text-center py-[50%]  font-semibold">
            No Bill
          </div>
        ) : (
          bills.map((bill: any) => {
            return (
              <div
                key={Math.random()}
                className="bg-white/5 border border-white/10 p-2.5 rounded-3xl space-y-2 flex justify-between items-center"
              >
                <div className="flex flex-col gap-2.5 w-[80%] pb-1 ">
                  <div className="ml-1 text-xl font-semibold ">
                    {getDate(bill.date)}
                  </div>
                  <div className="ml-1 flex gap-2">
                    {bill.rice ? (
                      <div className="flex border bg-[#00e676] shadow-md shadow-[#00e676]/40 border-white/5 rounded-full text-xs font-medium px-3 py-1">
                        Rice{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                    {bill.meat ? (
                      <div className="flex border bg-[#ff4081] shadow-md shadow-[#ff4081]/40 border-white/5 rounded-full text-xs font-medium px-3 py-1">
                        Meat{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                    {bill.fish ? (
                      <div className="flex border bg-[#03a9f4] shadow-md shadow-[#03a9f4]/40 border-white/5 rounded-full text-xs font-medium px-3 py-1">
                        Fish{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                    {bill.egg ? (
                      <div className="flex border bg-[#ff5252] shadow-md shadow-[#ff5252]/40 border-white/5 rounded-full text-xs font-medium px-3 py-1">
                        Egg{" "}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {/* <div className="text-lg ml-1">Ruti : {bill.ruti}</div> */}
                  {bill.ruti ? (
                    <div className="ml-1 text-sm font-medium bg-white/5 w-full rounded-full">
                      <div
                        className={`rounded-full bg-[#8866ff] shadow-md shadow-[#8866ff]/40 p-0.5 pl-2`}
                        style={{ width: `${20 + bill.ruti * 8}%` }}
                      >
                        Ruti : {bill.ruti}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="text-4xl font-medium mr-1 pb-3 opacity-75 px-2.5 relative">
                  {getTOtal(bill) || 0}
                  <p className="text-base font-medium text-start top-0 right-0 absolute">
                    &#x20B9;
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="bg-accent border border-accent rounded-full fixed bottom-7 right-7 backdrop-blur-3xl shadow-lg shadow-accent/40 ">
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
