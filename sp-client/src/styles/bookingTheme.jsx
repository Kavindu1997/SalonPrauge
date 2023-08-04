import { Typography, Box, Button } from "@mui/material";
import styled from "@emotion/styled";

export const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontWeight: 600,
  fontSize: "50px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "40px",
  },
}));

export const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const DetailContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "60%",
  padding: "100px",
  paddingLeft: "150px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1000,
    padding: "60px",
    paddingLeft: "200px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "60px",
    paddingLeft: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "80px",
    paddingLeft: "40px",
    maxWidth: 500,
  },
}));

export const DetailImage = styled("img")(({ src, theme }) => ({
  maxWidth: "500px",
  height: "580px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1000,
    height: "892px",
  },
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },

  [theme.breakpoints.between("650", "1000")]: {
    width: "450px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const DetailTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontWeight: 600,
  fontSize: "50px",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "40px",
  },
}));

export const DetailDescription = styled(Typography)(({ theme }) => ({
  marginTop: 2,
}));

export const DetailButton = styled(Button)({
  top: "30px",
  width: "233px",
  height: "53px",
  padding: "16px 48px",
  gap: "10px",
  fontFamily: "Poppins",
  fontSize: "12px",
});

export const FormContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: "60%",
  padding: "0px",
  paddingLeft: "150px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1000,
    padding: "60px",
    paddingLeft: "200px",
  },
  [theme.breakpoints.down("lg")]: {
    maxWidth: 1000,
    padding: "0px 40px 10px 200px",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: 600,
    padding: "0px 40px 10px 80px",
  },

  [theme.breakpoints.between("600", "740")]: {
    maxWidth: 600,
    padding: "0px 40px 10px 220px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0px 0px 10px 40px",
    maxWidth: 500,
  },
}));

export const FormImage = styled("img")(({ src, theme }) => ({
  maxWidth: "560px",
  height: "720px",
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1000,
    height: "892px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "560px",
  },
  [theme.breakpoints.down("md")]: {
    width: "450px",
    height: "822px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    maxHeight: "400px",
  },
}));

export const FormBox = styled(Box)(({ theme }) => ({
  width: "453px",
  [theme.breakpoints.down("lg")]: {
    width: "453px",
  },
  [theme.breakpoints.down("md")]: {
    width: "303px",
  },
}));

export const FormHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "50px",
  marginBottom: "20px",
  marginTop: "40px",
  [theme.breakpoints.down("md")]: {
    fontWeight: 600,
    fontSize: "40px",
    marginTop: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "35px",
    marginTop: "24px",
  },
}));

export const PickerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  marginTop: "15px",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const PickerItem = styled(Box)(({ theme }) => ({
  width: "221px",
  [theme.breakpoints.down("lg")]: {
    display: "block",
    marginTop: "15px",
  },
}));

export const PaymentAmount = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "25px",
  marginBottom: "20px",
  marginTop: "40px",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "20px",
  },
}));

export const ConfirmationContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fafafa",
  color: "white",
  minHeight: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(10px + 2vmin)",
}));

export const ConfirmationContent = styled(Box)(({ theme }) => ({
  position: "relative",
  textAlign: "center",
  width: "70%",
  bottom: "10px",
}));

export const ConfirmationDesc = styled(Typography)(({ theme }) => ({
  marginBottom: "10px",
}));

export const ConfirmationSmDesc = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const ConfirmationImg = styled("img")(({ theme }) => ({
  width: 40,
  height: 40,
  marginBottom: 10,
  marginTop: 20,
}));

export const ConfirmationFooter = styled(Typography)(({ theme }) => ({
  color: "#A5A5A5",
  marginBottom: 10,
}));
