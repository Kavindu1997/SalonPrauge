import { Select, MenuItem, Box, FormControl, InputLabel } from "@mui/material";

const SelectDropDown = ({ label, options, ...rest }) => {
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select {...rest} label={label}>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDropDown;
