import { DatePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.min.css";

const AntDatePicker = ({ error, ...rest }) => {
  return (
    <div>
      <DatePicker
        allowClear
        showToday={false}
        disabledDate={(current) =>
          current.isBefore(moment().subtract(1, "day"))
        }
        placeholder="Date"
        status={error && "error"}
        {...rest}
      />
      {error && <div className="errorhelper">{error}</div>}
    </div>
  );
};

export default AntDatePicker;
