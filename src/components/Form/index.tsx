import {
	Form,
	Input,
} from "antd";
import React, { FC } from "react";

const FormComponent:FC = () => {
  const formFields = ["Address", "Amount (Eth)", "Keyword", "Enter Message"];
  return (
    <Form layout="vertical" className="container" id="form">
      {
        formFields.map((field) => (
          <Form.Item label={field} key={field}>
            <Input placeholder={field}/>
          </Form.Item>
        ))
      }
      <Form.Item label="Address">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
