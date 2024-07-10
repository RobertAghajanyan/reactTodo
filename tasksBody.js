import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.list,
    };
  }

  doneBtnHandle(item) {
    this.setState(
      this.state.tasks.map((items) => {
        if (items.key != item.key) {
          return items;
        } else {
          items.finished = !items.finished;
          return items;
        }
      })
    );
  }

  render() {
    return (
      <div id="tasksSection">
        {this.state.tasks.map((item) => {
          return (
            <div key={item.key} className="tasks">
              <p className="tasksTime">{item.addingTime}</p>
              <p
                className="tasksText"
                style={
                  item.finished ? { textDecoration: "line-through" } : null
                }
              >
                {" "}
                {item.text}
              </p>

              {!item.finished ? (
                <button
                  className="tasksDoneBtn"
                  onClick={() => {
                    this.doneBtnHandle(item);
                  }}
                >
                  Done
                </button>
              ) : (
                true
              )}

              <button
                className="tasksDeleteBtn"
                onClick={() => {
                  this.props.deleteHandle(item);
                  this.setState({ tasks: this.props.list });
                  console.log("tasksBody state", this.state.tasks);
                  console.log("addingSection state", this.props.list);
                }}
              >
                Delete{" "}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Task;
