import React from "react";
import AddingSection from "./AddingSection";
import Title from "./Title";
import Task from "./tasksBody";
import Filters from "./Filters";

class MainDesk extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      mainList: [],
      renderList: [],
    };
  }

  changeList = (action, item) => {
    //action true -> push, false -> delete
    if (action) {
      this.setState((prevState) => ({
        mainList: [...prevState.mainList, item],
        renderList: [...prevState.mainList, item],
      }));
    } else {
      this.setState((prevState) => ({
        mainList: prevState.mainList.filter((el) => el.key !== item.key),
        renderList: prevState.mainList.filter((el) => el.key !== item.key),
      }));
    }
  };

  setFilteredRenderList = (arr) => {
    this.setState({ renderList: arr });
  };

  renderListReset = () => {
    this.setState((prevState) => ({
      renderList: [...prevState.mainList],
    }));
  };

  changeFinished = (item) => {
    this.setState((prevState) => ({
      mainList: prevState.mainList.map((el) => {
        if (el.key === item.key) {
          return { ...el, finished: !el.finished };
        }
        return el;
      }),
      renderList: prevState.mainList.map((el) => {
        if (el.key === item.key) {
          return { ...el, finished: !el.finished };
        }
        return el;
      }),
    }));
  };

  render() {
    return (
      <>
        <Title />
        <AddingSection
          rList={this.state.renderList}
          mListChange={this.changeList}
        />
        <Task
          rList={this.state.renderList}
          mListChange={this.changeList}
          mChangeFinished={this.changeFinished}
        />
        <Filters
          mList={this.state.mainList}
          rList={this.state.renderList}
          setFilteredRenderList={this.setFilteredRenderList}
          rListReset={this.renderListReset}
        />
      </>
    );
  }
}

export default MainDesk;
