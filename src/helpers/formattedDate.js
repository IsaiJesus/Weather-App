const formattedDate = (data) => {
  var dateObject = new Date(data);
  var dayOfWeek = dateObject.toLocaleDateString("en", { weekday: "long" });
  var month = dateObject.toLocaleDateString("en", { month: "long" });
  var dayOfMonth = dateObject.toLocaleDateString("en", { day: "numeric" });
  return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

export default formattedDate;