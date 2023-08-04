import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  PaymentAmount,
  FormHeader,
  PickerContainer,
  PickerItem,
} from "../../styles/bookingTheme";
import * as paymentService from "../../services/paymentService";
import * as bookingService from "../../services/bookingService";
import { customerServices } from "../../services/fakecustomerservices";
import config from "../../config.json";
import withForm from "../../components/hoc/withForm";

const bookingData = {
  serviceId: "",
  firstname: "",
  lastname: "",
  email: "",
  date: null,
  time: null,
};

const bookingSchema = Joi.object({
  serviceId: Joi.string().required(),
  firstname: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .required()
    .label("First Name")
    .messages({
      "string.pattern.base":
        "First name should not contain any numbers or special characters",
    }),
  lastname: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .required()
    .label("Last Name")
    .messages({
      "string.pattern.base":
        "Last name should not contain any numbers or special characters",
    }),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .label("Email"),
  date: Joi.string().required().label("Date"),
  time: Joi.string()
    .regex(/^((0[8-9]|1[0-1]):(00|30) AM)|((0[1-5]):(00|30) PM)$/)
    .required()
    .label("Time")
    .messages({
      "string.pattern.base": "Time Should be within 8AM - 5.30PM",
    }),
});

const BookingForm = ({
  data,
  renderInput,
  renderSelect,
  renderButton,
  renderAntTimePicker,
  renderAntDatePicker,
  validate,
}) => {
  const form = useRef();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [customerService, setCutomerService] = useState([...customerServices]);
  const priceForStripe =
    customerService[data.serviceId - 1]?.amount.slice(0, 2) * 100;

  const payNow = async (token) => {
    try {
      const response = await paymentService.createPayment({
        amount: priceForStripe,
        token,
      });
      if (response.status === 200) {
        handleSuccess();
        try {
          await bookingService.createBooking({
            serviceId: data.serviceId,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            date: data.date,
            time: data.time,
          });
        } catch (ex) {
          console.log(ex);
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Successfully sent an email to your account!",
      time: 1000,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/confirmation");
      }
    });
  };

  return (
    <form ref={form}>
      <FormHeader>Booking Details</FormHeader>

      {renderSelect("serviceId", "Select Service", customerService)}
      {renderInput("firstname", "First Name", true)}
      {renderInput("lastname", "Last Name", true)}
      {renderInput("email", "Email", true)}

      <PickerContainer>
        <PickerItem>{renderAntDatePicker()}</PickerItem>
        <PickerItem>{renderAntTimePicker()}</PickerItem>
      </PickerContainer>

      <PaymentAmount>
        Total:USD&nbsp;
        {data.serviceId ? customerService[data.serviceId - 1].amount : "0.00"}
      </PaymentAmount>

      <StripeCheckout
        stripeKey={config.publishKey}
        label="Pay Now"
        name="Pay with Credit Card"
        amount={priceForStripe}
        description={`Your Total is USD ${
          customerService[data.serviceId - 1]?.amount
        }`}
        token={payNow}
        disabled={validate() === null ? false : true}
      >
        {renderButton("Pay Now")}
      </StripeCheckout>
    </form>
  );
};

export default withForm(BookingForm, bookingData, bookingSchema);
