const methodsForAddingSection = {
  keyMaker: function (count) {
    let id = `${count}-${Math.floor(Math.random() * (100 - 1 + 1)) + 1}`;
    return id;
  },

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
