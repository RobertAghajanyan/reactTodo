import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderList: [...this.props.mList],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.mList !== this.props.mList) {
      this.setState({ renderList: [...this.props.mList] });
    }
  }

  render() {
    return (
      <div id="tasks">
        {this.state.renderList.map((item) => {
          return (
            <div className="task" key={item.key}>
              <p className="tasksDate">{item.addDate}</p>
              <h3
                className="tasksText"
                style={
                  item.finished
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {item.text}
              </h3>
              <button
                className="taskFinishBtn"
                onClick={() => {
                  this.props.mChangeFinished(item);
                }}
              >
                Finish
              </button>
              <button
                className="taskDeleteBtn"
                onClick={() => this.props.mListChange(false, item)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Task;
