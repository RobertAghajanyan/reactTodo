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

    return `${
      daysOfWeek[addDate.getDay()]
    } ${addDate.getHours()}:${addDate.getMinutes()}`;
  },
};

export default methodsForAddingSection;
