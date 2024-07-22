import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  inpHandle = (event) => {
    this.setState({ inputValue: event.target.value.trim() });
    if (this.state.inputValue) {
      this.props.setFilteredRenderList(
        this.props.rList.filter((item) =>
          item.text.includes(event.target.value.trim())
        )
      );
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputValue !== this.state.inputValue) {
      const filteredTasks = this.props.mList.filter((item) =>
        item.text.includes(this.state.inputValue)
      );
      this.props.setFilteredRenderList(filteredTasks);
    }
  }

  render() {
    return (
      <div id="Searcher">
        <input
          type="text"
          id="SearcherInp"
          placeholder="Search Task"
          onChange={this.inpHandle}
        />
      </div>
    );
  }
}

export default SearchBar;
