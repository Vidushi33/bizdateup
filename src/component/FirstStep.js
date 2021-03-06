import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Progress from "./Progress";

const FirstStep = (props) => {
  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      user_email: user.user_email,
      user_password: user.user_password,
    },
  });

  const onSubmit = (data) => {
    props.updateUser(data);
    console.log(props);
    props.history.push("/second");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-9 offset-md-2 multi-step-form"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        {/* <h1 className="multi-step-heading">Signup Form</h1> */}
        <Progress />
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            ref={register({
              required: "First name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "First name should contain only characters.",
              },
            })}
            className={`${errors.first_name ? "input-error" : ""}`}
          />
          {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            ref={register({
              required: "Last name is required.",
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "Last name should contain only characters.",
              },
            })}
            className={`${errors.last_name ? "input-error" : ""}`}
          />
          {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )}
        </Form.Group>
        <Form.Group controlId="user_email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            autoComplete="off"
            ref={register({
              required: "Email is required.",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            className={`${errors.user_email ? "input-error" : ""}`}
          />
          {errors.user_email && (
            <p className="errorMsg">{errors.user_email.message}</p>
          )}
        </Form.Group>

        <Form.Group controlId="user_password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="user_password"
            placeholder="Choose a password"
            autoComplete="off"
            ref={register({
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password should have at-least 6 characters.",
              },
            })}
            className={`${errors.user_password ? "input-error" : ""}`}
          />
          {errors.user_password && (
            <p className="errorMsg">{errors.user_password.message}</p>
          )}
        </Form.Group>

        <p
          style={{ fontSize: "15px", textAlign: "center", marginTop: "1.3rem" }}
        >
          Already have an account ?{" "}
          <span>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "#E67E22" }}
            >
              <strong>Login</strong>
            </Link>
          </span>
        </p>

        <div className="multi-step-buttons">
          <Button
            style={{ borderRadius: "50%" }}
            variant="danger"
            type="submit"
          >
            <i className="mdi mdi-google"></i>
          </Button>

          <Button variant="info" type="submit" style={{ borderRadius: "50%" }}>
            <i className="mdi mdi-facebook"></i>
          </Button>

          {/* <Button variant="primary" type="submit">
            Next
          </Button> */}
        </div>
      </motion.div>
    </Form>
  );
};

export default FirstStep;
