import styled from "@emotion/styled";
import Button from "@mui/material/Button";

export const ContainedButton = styled(Button)({
  top: "9px",
  left: "16px",
  width: "163px",
  height: "53px",
  "&:hover": {
    color: "black",
    backgroundColor: "#fafafa",
    border: "1px solid",
    borderColor: "black",
    lineHeight: 1.5,
    boxShadow: "none",
  },
});

export const MenuButton = styled(Button)(({ theme }) => ({
  margin: "20px 10px",
  color: "black",
  display: "block",
  "&:hover": {
    color: theme.palette.primary.main,
    background: "none",
  },
  [theme.breakpoints.down("md")]: {
    margin: "5px 5px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "2px 5px",
  },
}));
