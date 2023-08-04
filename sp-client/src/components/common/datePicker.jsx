import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const MuxDatePicker = ({ Component, label, value, onChange, ...rest }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        minDate={new Date()}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default MuxDatePicker;
