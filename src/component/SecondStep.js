import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

import Progress from "./Progress";
import { Link } from "react-router-dom";

const SecondStep = (props) => {
  //const [designation, setDesignation] = useState([]);
  // const [gender, setGender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const [selectedDesignation, setSelectedDesignation] = useState('');
  const [selectedGender, setSelectedGender] = useState("");

  const { user } = props;
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      phone: user.phone,
      age: user.age,
      pan: user.pan,
      aadhar: user.aadhar,
    },
  });

  let designation = [
    {
      id: 1,
      name: "Founder",
    },
    {
      id: 2,
      name: "Co-founder",
    },
    {
      id: 3,
      name: "Professional",
    },
    {
      id: 4,
      name: "Freelancer",
    },
  ];

  let gender = [
    {
      id: 1,
      name: "Male",
    },
    {
      id: 2,
      name: "Female",
    },
    {
      id: 3,
      name: "Other",
    },
  ];

  // useEffect(() => {
  //   const getDesignation = async () => {
  //     try {
  //       setIsLoading(true);
  //       // allCountries = result?.map(({ isoCode, name }) => ({
  //       //   isoCode,
  //       //   name
  //       // }));
  //       const [{ id: first_designation } = {}] = designation;
  //       setSelectedDesignation(first_designation);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       //setDesignation([]);
  //       setIsLoading(false);
  //     }
  //   };

  //   getDesignation();
  // }, []);

  useEffect(() => {
    const getGender = async () => {
      try {
        setIsLoading(true);
        // allCountries = result?.map(({ isoCode, name }) => ({
        //   isoCode,
        //   name
        // }));
        const [{ id: first_gender } = {}] = gender;
        setSelectedGender(first_gender);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    getGender();
  }, []);

  const onSubmit = (data) => {
    const updatedData = {
      // designations: designation.find(
      //   (designation) => {
      //     return (designation.id == selectedDesignation)
      //   }
      // )?.name,
      genders: gender.find((gender) => {
        return gender.id == selectedGender;
      })?.name,
    };
    // console.log(designation);
    console.log(gender);
    console.log(updatedData.designations);
    console.log(updatedData.genders);

    props.updateUser({
      ...data,
      ...updatedData,
    });
    //console.log(props) ;
    props.history.push("/third");
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <motion.div
        className="col-md-9 offset-md-2 multi-step-form"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ stiffness: 150 }}
      >
        <Progress />
        <Form.Group controlId="phone">
          <Form.Label>Mobile No.</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            autoComplete="off"
            ref={register({
              required: "Mobile number is required.",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: "Mobile number should be of 10 digits",
              },
            })}
            className={`${errors.phone ? "input-error" : ""}`}
          />
          {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
        </Form.Group>

        <Form.Group controlId="pan">
          <Form.Label>PAN No.</Form.Label>
          <Form.Control
            type="text"
            name="pan"
            placeholder="Enter your PAN number"
            autoComplete="off"
            ref={register({
              required: "PAN number is required.",
              pattern: {
                value: /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
                message: "PAN number is invalid",
              },
            })}
            className={`${errors.pan ? "input-error" : ""}`}
          />
          {errors.pan && <p className="errorMsg">{errors.pan.message}</p>}
        </Form.Group>

        <Form.Group controlId="aadhar">
          <Form.Label>Aadhar No.</Form.Label>
          <Form.Control
            type="text"
            name="aadhar"
            placeholder="XXXX XXXX XXXX"
            autoComplete="off"
            ref={register({
              required: "aadhar number is required.",
              pattern: {
                value: /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/,
                message: "aadhar is not a valid one",
              },
            })}
            className={`${errors.aadhar ? "input-error" : ""}`}
          />
          {errors.aadhar && <p className="errorMsg">{errors.aadhar.message}</p>}
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            name="age"
            placeholder="age"
            autoComplete="off"
            ref={register({
              required: "age is required.",
              pattern: {
                value: /^\d+$/,
                message: "Should be number",
              },
            })}
            className={`${errors.age ? "input-error" : ""}`}
          />
          {errors.age && <p className="errorMsg">{errors.age.message}</p>}
        </Form.Group>
        {/* <Form.Group controlId="designation">
          {isLoading && (
            <p className="loading">Loading destinations. Please wait...</p>
          )}
          <Form.Label>Designation</Form.Label>
          <Form.Control
            as="select"
            name="designation"
            value={selectedDesignation}
            onChange={(event) => setSelectedDesignation(event.target.value)}
          >
            {designation.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Form.Control>
        </Form.Group> */}

        <Form.Group controlId="gender">
          {isLoading && (
            <p className="loading">Loading genders. Please wait...</p>
          )}
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={selectedGender}
            onChange={(event) => setSelectedGender(event.target.value)}
          >
            {gender.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Form.Control>
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

        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit">
            Next
          </Button>
        </div>
      </motion.div>
    </Form>
  );
};

export default SecondStep;
