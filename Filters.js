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

  componentDidUpdate() {
    console.log(this.props.rList);
  }

  render() {
    return (
      <div className="filters">
        <button
          className="filterButtons"
          id="finishedF"
          onClick={this.filterButtonsHandle}
        >
          Finished Tasks
        </button>
        <button
          className="filterButtons"
          id="notFinishedF"
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
