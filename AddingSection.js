import React from "react";
import methodsForAddingSection from "./functions";
import uniqid from "uniqid";

class Adding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      innerInput: "",
    };
  }

  addTaskBtnHandle = () => {
    this.setState({ open: !this.state.open });
  };

  handleInp = (event) => {
    this.setState({ innerInput: event.target.value });
  };

  applyBtnHandle = () => {
    let item = {
      text: this.state.innerInput,
      addDate: methodsForAddingSection.addTime(),
      finished: false,
      key: uniqid(),
    };

    this.props.mListChange(true, item);
    this.setState({ innerInput: "", open: false });
  };

  render() {
    if (this.state.open) {
      return (
        <div id="adderOpen">
          <input
            type="text"
            placeholder="Write your task..."
            id="addingInp"
            onChange={this.handleInp}
          />
          <button id="addingApplyBtn" onClick={this.applyBtnHandle}>
            Apply
          </button>
        </div>
      );
    } else {
      return (
        <div id="adderClose">
          <button id="addTasksBtn" onClick={this.addTaskBtnHandle}>
            Add Task
          </button>
        </div>
      );
    }
  }
}

export default Adding;
