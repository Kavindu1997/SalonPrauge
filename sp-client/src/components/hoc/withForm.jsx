import Joi from "joi";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Input from "../common/input";
import SelectDropDown from "../common/select";
import AntTimePicker from "../common/antTimePicker";
import AntDatePicker from "../common/antDatePicker";

const withForm = (Component, formdata, schema) => {
  return function WithForm(props) {
    const [data, setData] = useState(formdata);
    const [error, setError] = useState({});
    const location = useLocation();

    const validate = () => {
      const options = { abortEarly: false };
      const { error } = schema.validate(data, options);
      if (!error) return null;

      const errors = {};
      for (let item of error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    };

    const validateProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const ischema = Joi.object({ [name]: schema.extract(name) });
      const { error } = ischema.validate(obj);
      return error ? error.details[0].message : null;
    };

    const handleChange = ({ target: input }) => {
      const errors = { ...error };
      const errorMessage = validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];
      setError(errors);

      const cpydata = { ...data };
      cpydata[input.name] = input.value;
      setData(cpydata);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      setError({ errors: errors || {} });

      if (errors) return;
    };

    const renderInput = (name, label, required) => {
      return (
        <Input
          label={label}
          name={name}
          value={data[name]}
          onChange={handleChange}
          error={error[name]}
          required={required}
        />
      );
    };

    const renderSelect = (name, label, options) => {
      return (
        <SelectDropDown
          name={name}
          label={label}
          value={data[name]}
          onChange={handleChange}
          options={options}
        />
      );
    };

    const renderButton = (label) => (
      <Button
        variant="contained"
        disabled={validate() === null ? false : true}
        onClick={handleSubmit}
        style={{ width: 156, height: 53, marginTop: 10 }}
        sx={{ color: "white" }}
      >
        {label}
      </Button>
    );

    const convertToDefEventPara = (name, value) => ({
      target: {
        name,
        value,
      },
    });

    const renderAntDatePicker = () => {
      return (
        <AntDatePicker
          onChange={(date, dateString) =>
            handleChange(convertToDefEventPara("date", dateString))
          }
          error={error.date}
          selectedDate={data.date}
        />
      );
    };

    const renderAntTimePicker = () => {
      return (
        <AntTimePicker
          onChange={(time, timeString) =>
            handleChange(convertToDefEventPara("time", timeString))
          }
          error={error.time}
          selectedDate={data.date}
        />
      );
    };

    useEffect(() => {
      if (location.state) {
        const id = location.state.from.pathname.split("/").pop();
        setData({ ...data, [Object.keys(formdata)[0]]: id });
      }
    }, []);

    return (
      <Component
        {...props}
        data={data}
        renderInput={renderInput}
        renderSelect={renderSelect}
        renderButton={renderButton}
        renderAntTimePicker={renderAntTimePicker}
        renderAntDatePicker={renderAntDatePicker}
        validate={validate}
      />
    );
  };
};

export default withForm;
