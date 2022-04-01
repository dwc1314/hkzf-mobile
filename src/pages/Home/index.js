import React from "react";
import { Route, Routes } from "react-router-dom";
import { Badge, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  // MessageFill,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import News from "../News";
export default class Home extends React.Component {
  state = {
    tabs: [
      {
        key: "home",
        title: "首页",
        icon: <AppOutline />,
        badge: Badge.dot,
      },
      {
        key: "todo",
        title: "我的待办",
        icon: <UnorderedListOutline />,
        badge: "5",
      },
      {
        key: "message",
        title: "我的消息",
        icon: <MessageOutline />,
        badge: "99+",
      },
      {
        key: "personalCenter",
        title: "个人中心",
        icon: <UserOutline />,
      },
    ],
  };
  // [activeKey, setActiveKey] = useState('todo')
  render() {
    return (
      <div>
        <TabBar>
              {this.state.tabs.map((item) => (
                <TabBar.Item
                  key={item.key}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </TabBar>
        <Routes>
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    );
  }
}
