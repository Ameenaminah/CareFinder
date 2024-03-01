import React, { useState } from "react";
import { Button, Col, Drawer, Row, Space, Form } from "antd";
import { Input, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HospitalValues, hospitalSchema } from "./validation";

export const HospitalForm: React.FC = () => {
  // const [open, setOpen] = useState(false);

  const defaultValue = {
    name: "",
    specialization: "",
    ownership: "",
    email: "",
    phoneNumber: "",
    website: "",
    about: "",
    image: "",
  };

  const {
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm<HospitalValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(hospitalSchema),
    mode: "onBlur",
  });

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Drawer
        title="Edit a Hospital"
        width={720}
        // onClose={onClose}
        open
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="name"
                label="Hospital Name"
                register={register}
                error={errors.name?.message}
                type="text"
              />
            </Col>
            <Col span={12}>
              <Input
                name="phoneNumber"
                label="Phone Number"
                register={register}
                error={errors.phoneNumber?.message}
                type="text"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="website"
                label="Website"
                register={register}
                error={errors.website?.message}
                type="url"
              />
            </Col>
            <Col span={12}>
              <Input
                name="email"
                label="Email Address"
                register={register}
                error={errors.email?.message}
                type="text"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="specialization"
                label="Specialization"
                register={register}
                error={errors.specialization?.message}
                type="text"
              />
            </Col>
            <Col span={12}>
              <Input
                name="image"
                label="Image"
                register={register}
                error={errors.image?.message}
                type="image"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <SelectInput
                placeholder="Please select a type"
                options={[
                  { value: "private", label: "Private" },
                  { value: "public", label: "Public" },
                ]}
              />
            </Col>
          </Row>
          {/* <textarea
            name="about"
            id="about"
            cols={30}
            rows={10}
            // placeholder="Type your Markdown content here..."
            style={{ marginTop: "2em" }}
          >
            Type your Markdown content here...
          </textarea> */}
        </Form>
      </Drawer>
    </>
  );
};
