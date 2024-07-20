import React from "react";
import AddingSection from "./AddingSection";
import Title from "./Title";
import Task from "./tasksBody";

class MainDesk extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      mainList: [],
    };
  }

  changeList = (action, item) => {
    //action true -> push, false -> delete
    if (action) {
      this.setState((prevState) => ({
        mainList: [...prevState.mainList, item],
      }));
    } else {
      this.setState((prevState) => ({
        mainList: prevState.mainList.filter((el) => el.key !== item.key),
      }));
    }
  };

  changeFinished = (item) => {
    this.setState((prevState) => ({
      mainList: prevState.mainList.map((el) => {
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
          mList={this.state.mainList}
          mListChange={this.changeList}
        />
        <Task
          mList={this.state.mainList}
          mListChange={this.changeList}
          mChangeFinished={this.changeFinished}
        />
      </>
    );
  }
}

export default MainDesk;
