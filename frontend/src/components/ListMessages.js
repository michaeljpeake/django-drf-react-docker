import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { getMessages, deleteMessage } from "../redux/actions.js";

class ListMessages extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }

  deleteMessage = (id) => {
    this.props.deleteMessage(id, this.info);
  };

  info() {
    message.info("Message Deleted");
  }

  render() {
    const messages = this.props.messages;
    console.log(messages);

    return (
      <Col span={12} offset={6}>
        {messages.map((p) => (
          <Row key={p.id} style={{ paddingBlock: "16px" }}>
            <Card
              title={p.title}
              style={{ width: "100%" }}
              actions={[
                <DeleteOutlined
                  key="delete"
                  onClick={() => this.deleteMessage(p.id)}
                />,
              ]}
            >
              <p>{p.content}</p>
            </Card>
          </Row>
        ))}
      </Col>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  getMessages,
  deleteMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMessages);
