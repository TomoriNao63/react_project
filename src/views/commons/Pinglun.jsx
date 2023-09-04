import React from "react";

class Pinglun extends React.Component {
  state = {
    tabs: [
      {
        id: 1,
        name: "热度",
        type: "hot",
      },
      {
        id: 2,
        name: "时间",
        type: "time",
      },
    ],
    active: "hot",
    lists: [
      {
        id: 1,
        name: "chen",
        comment: "123",
        attitude: 1,
      },
      {
        id: 2,
        name: "wang",
        comment: "222",
        attitude: 0,
      },
      {
        id: 3,
        name: "li",
        comment: "333",
        attitude: 0,
      },
      {
        id: 4,
        name: "xxz",
        comment: "333",
        attitude: 0,
      },
    ],
    comment: "", //评论内容
  };

  //tab切换回调
  switchTab = (type) => {
    console.log("切换", type);
    this.setState({
      active: type,
    });
  };
  //受控组件回调
  textareaChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  //发表评论提交回调
  SubmitComment = () => {
    //提交评论
    this.setState({
      lists: [
        ...this.state.lists,
        {
          id: 5,
          name: "xxz",
          comment: this.state.comment,
          attitude: 0,
        },
      ],
    });
  };
  //删除回调
  delComment = (id) => {
    this.setState({
      lists: this.state.lists.filter((item) => item.id !== id),
    });
  };
  //点赞喜欢
  toggleLike = (curItem) => {
    console.log(curItem);
    const { attitude, id } = curItem;
    this.setState({
      lists: this.state.lists.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === 1 ? 0 : 1,
          };
        } else {
          return item;
        }
      }),
    });
  };
  //点踩
  toggledisLike = (curItem) => {
    console.log(curItem);
    const { attitude, id } = curItem;
    this.setState({
      lists: this.state.lists.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude: attitude === -1 ? 0 : -1,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div className="">
        <div className="ui grid">
          <ul className="ui top attached tabular menu">
            {this.state.tabs.map((tab) => (
              <li
                key={tab.id}
                className={
                  tab.type === this.state.active ? "active item" : "item"
                }
                onClick={() => this.switchTab(tab.type)}
              >
                按{tab.name}排序
              </li>
            ))}
          </ul>
          <div className="ui bottom attached active tab segment">
            <div className="ui grid">
              <div className="ui input">
                <form className="ui form">
                  <textarea
                    cols="80"
                    rows="5"
                    value={this.state.comment}
                    onChange={this.textareaChange}
                    placeholder="请输入内容"
                  />
                </form>
              </div>
              <button
                className="ui primary button"
                onClick={this.SubmitComment}
              >
                评论
              </button>
            </div>
            <div className="grid">
              <hr></hr>
            </div>
            <div className="ui feed">
              {this.state.lists.map((item) => (
                <div key={item.id} className="event">
                  <div className="label">
                    <img
                      className="ui mini image"
                      src="../assets/img/1.jpg"
                    ></img>
                  </div>
                  <div className="content">
                    <div className="summary">
                      <a>{item.name}</a>
                    </div>
                    <div class="extra text">{item.comment}</div>
                    <div className="meta">
                      <span>
                        <a>回复</a>
                      </span>
                      <a
                        className="thumbs up like"
                        onClick={() => this.toggleLike(item)}
                      >
                        <i
                          className={
                            item.attitude === 1
                              ? "thumbs up icon active"
                              : "thumbs up outline icon"
                          }
                        ></i>
                      </a>
                      <a
                        className="thumbs down dislike"
                        onClick={() => this.toggledisLike(item)}
                      >
                        <i
                          className={
                            item.attitude === -1
                              ? "thumbs down icon active"
                              : "thumbs down outline icon"
                          }
                        ></i>
                      </a>
                      <span onClick={() => this.delComment(item.id)}>
                        <a>删除</a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pinglun;
