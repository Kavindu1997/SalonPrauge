import { Typography, Button, Box } from "@mui/material";
import styled from "@emotion/styled";

export const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff5f1",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  marginTop: "20px",
}));

export const AboutImage = styled("img")(({ theme }) => ({
  mixBlendMode: "soft-light",
  height: "500px",
  width: "100%",
}));

export const AboutContent = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  position: "absolute",
  textAlign: "center",
  width: "70%",
}));

export const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontWeight: 600,
  fontSize: "50px",
  marginBottom: "20px",
  textAlign: "center",
  marginTop: "10px",
}));

export const SectionContent = styled(Typography)(({ theme }) => ({
  marginBottom: "20px",
  textAlign: "center",
  marginTop: "10px",
}));

export const SectionFooter = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  fontSize: "14px",
  backgroundImage: `url(/assets/banner.png)`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
}));

export const BannerInner = styled(Box)(({ theme }) => ({
  height: "500px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
  justifyContent: "center",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #020202 100%)",
}));

export const BannerContent = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  position: "absolute",
  textAlign: "left",
  top: "216px",
  left: "110px",
  width: "70%",
}));

export const BannerHead = styled(Typography)(({ theme }) => ({
  fontFamily: "Playfair Display",
  fontWeight: 600,
  fontSize: 50,
  position: "relative",
  bottom: "20px",
  color: "white",
  width: "60%",
  [theme.breakpoints.down("md")]: {
    fontSize: 38,
    bottom: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 25,
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: 25,
  },
}));

export const BannerQuote = styled(Typography)(({ theme }) => ({
  position: "relative",
  color: "white",
  width: "60%",
  [theme.breakpoints.down("md")]: { bottom: "90px" },
}));

export const BannerFoot = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "60%",
  [theme.breakpoints.down("md")]: { bottom: "90px" },
}));

export const OutlinedButton = styled(Button)(({ theme }) => ({
  color: "white",
  "&:hover": {
    color: "white",
    backgroundColor: "black",
    borderColor: "black",
  },
  border: "1px solid",
  lineHeight: 1.5,
  width: "163px",
  height: "53px",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: { width: "143px", height: "45px" },
}));

export const ImgContainer = styled("div")(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  marginTop: "50px",
}));
