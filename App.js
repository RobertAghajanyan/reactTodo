import React from "react";
import AddingSection from "./AddingSection";
import Task from "./tasksBody"; //??
import taskList from "./taskList";

class MainDesk extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      currentTaskCount: taskList.length,
    };
  }

  render() {
    return (
      <div id="desk">
        <AddingSection />
      </div>
    );
  }
}

export default MainDesk;
