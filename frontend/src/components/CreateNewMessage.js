import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Col, message } from "antd";

import { createMessage } from "../redux/actions.js";

class CreateNewMessage extends React.Component {
  onFinish = (values) => {
    this.props.createMessage(values, (resp) => {
      message.success("Message created");
    });
  };

  onFinishFailed = (errorInfo) => {
    message.error("Form error");
    console.log(errorInfo);
  };

  render() {
    return (
      <Col span={12} offset={6}>
        <Form
          name="createMessage"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="false"
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "You must provide a title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              { required: true, message: "You must provide some content" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    );
  }
}

const mapDispatchToProps = {
  createMessage,
};

export default connect(null, mapDispatchToProps)(CreateNewMessage);
