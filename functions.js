const methodsForAddingSection = {
  addTime: function () {
    let addDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let myDate = daysOfWeek[addDate.getDay()] + " ";

    if (addDate.getHours().length < 10) {
      myDate += "0" + addDate.getHours() + ":";
    } else {
      myDate += addDate.getHours() + ":";
    }

    if (addDate.getMinutes().length < 10) {
      myDate += "0" + addDate.getMinutes();
    } else {
      myDate += addDate.getMinutes() + "";
    }

    return myDate;
  },
};

export default methodsForAddingSection;
