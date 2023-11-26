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

export function getDate(myDate: any) {
  const date = new Date(myDate);
  let day = date.getDate() as any;
  let month = months[date.getMonth()] as any;
  day = day < 10 ? "0" + day : day;
  const today = month + " " + day;
  return today;
}

export function black_fn() {
  console.log("clicked");
}
