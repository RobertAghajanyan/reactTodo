import React from "react";
import Task from "./tasksBody";
import methodsForAddingSection from "./functions";
class Adding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inputValue: "",
      taskList: [],
      count: 0,
    };
  }

  isOpenModify = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleInp = (event) => {
    this.setState({ inputValue: event.target.value });
    // console.log(this.state.inputValue);  //?
  };

  addTaskList = () => {
    this.setState({ count: (this.state.count += 1) });
    const taskInfo = {
      addingTime: methodsForAddingSection.addTime(),
      text: this.state.inputValue,
      finished: false,
      key: methodsForAddingSection.keyMaker(this.state.count),
    };

    this.state.taskList.push(taskInfo);
    this.isOpenModify();
    this.setState({ inputValue: "" });
    console.log(this.state.taskList);
  };

  deleteBtnHandleForTasksBody = (item) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.filter((items) => {
        return items.key !== item.key;
      }),
    }));
  };

  render() {
    if (this.state.isOpen === false) {
      return (
        <>
          <button id="addBtn" onClick={this.isOpenModify}>
            Add
          </button>
          <div id="tasksBody">
            <Task
              list={this.state.taskList}
              deleteHandle={this.deleteBtnHandleForTasksBody}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div id="adder">
            <input
              id="adderInp"
              placeholder="Input Task..."
              onChange={this.handleInp}
            ></input>
            <button id="adderAdd" className="aBtn" onClick={this.addTaskList}>
              Add
            </button>
            <button
              id="adderCancel"
              className="aBtn"
              onClick={this.isOpenModify}
            >
              Cancel
            </button>
          </div>
          <div id="tasksBody">
            <Task
              list={this.state.taskList}
              deleteHandle={this.deleteBtnHandleForTasksBody}
            />
          </div>
        </>
      );
    }
  }
}

export default Adding;
