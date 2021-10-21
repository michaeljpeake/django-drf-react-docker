import React from "react";
import { Link, Route } from "react-router-dom";
import { Layout, Menu } from "antd";

import ListMessages from "./ListMessages";
import CreateNewMessage from "./CreateNewMessage";

class MessageBoard extends React.Component {
  render() {
    const { Header, Content } = Layout;

    return (
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              Read Messages
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              Create Message
              <Link to="/create" />
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "50px 0" }}>
          <Route exact path="/" component={ListMessages} />
          <Route path="/create" component={CreateNewMessage} />
        </Content>
      </Layout>
    );
  }
}

export default MessageBoard;
