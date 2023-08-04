import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
  DetailContainer,
  DetailContent,
  DetailImage,
  DetailTitle,
  DetailButton,
  DetailDescription,
} from "../../styles/bookingTheme";
import { customerServices } from "../../services/fakecustomerservices";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [customerService, setCutomerService] = useState([...customerServices]);
  const index = id - 1;
  return (
    <DetailContainer>
      <DetailContent>
        <DetailTitle variant="h3" color="secondary">
          {customerService[index].category}
        </DetailTitle>
        <DetailDescription variant="body2" color="secondary">
          {customerService[index].content}
        </DetailDescription>
        <DetailButton
          variant="contained"
          color="secondary"
          onClick={() => {
            navigate("/bookingdetail", { state: { from: location } });
          }}
        >
          Make a Reservation
        </DetailButton>
      </DetailContent>
      <Box sx={{ flexGrow: 1 }} />
      <DetailImage src={customerService[index].image} alt="logo" />
    </DetailContainer>
  );
};

export default ServiceDetail;
