import React from "react";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: "none",
    };
  }

  filterButtonsHandle = (event) => {
    if (event.target.id === "finishedF") {
      this.setState({
        activeFilter: "fin",
      });
      this.props.setFilteredRenderList(
        this.props.mList.filter((item) => {
          if (item.finished) {
            return item;
          }
        })
      );
    } else if (event.target.id === "notFinishedF") {
      this.setState({
        activeFilter: "notFin",
      });
      this.props.setFilteredRenderList(
        this.props.mList.filter((item) => {
          if (!item.finished) {
            return item;
          }
        })
      );
    } else {
      this.setState({
        activeFilter: "none",
      });
      this.props.rListReset();
    }
  };

  selectedBtn(name) {
    if (name === this.state.activeFilter) {
      return true;
    }
  }

  componentDidUpdate() {
    console.log(this.props.rList);
  }

  render() {
    return (
      <div id="filters">
        <button
          className="filterButtons"
          id={this.selectedBtn("fin") ? "finishedFSelect" : "finishedF"}
          onClick={this.filterButtonsHandle}
        >
          Finished Tasks
        </button>
        <button
          className="filterButtons"
          id={
            this.selectedBtn("notFin") ? "notFinishedFSelect" : "notFinishedF"
          }
          onClick={this.filterButtonsHandle}
        >
          Not Finished Tasks
        </button>
        <button
          className="filterButtons"
          id="resetF"
          onClick={this.filterButtonsHandle}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Filters;
