import { Box } from "@mui/material";
import {
  DetailContainer,
  FormContent,
  FormImage,
  FormBox,
} from "../../styles/bookingTheme";
import BookingForm from "./bookingForm";

const BookingDetail = () => {
  return (
    <DetailContainer>
      <FormContent>
        <FormBox>
          <BookingForm />
        </FormBox>
      </FormContent>
      <Box sx={{ flexGrow: 1 }} />
      <FormImage src="/assets/booking1-min.jpg" alt="logo" />
    </DetailContainer>
  );
};

export default BookingDetail;
