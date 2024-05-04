import Card from "./Card";
import classes from "./CSS/Card.module.css"; // assuming you have a CSS module for OtherData
import PropTypes from "prop-types";

const OtherData = ({ street, city, zipcode, onClickOtherData }) => {
  return (
    <div onClick={() => onClickOtherData(false)}>
      <Card className={classes.other_data}>
        <div className={classes.data_item}>
          <span>Street:</span>
          <input type="text" value={street} disabled />
        </div>
        <div className={classes.data_item}>
          <span>City:</span>
          <input type="text" value={city} disabled />
        </div>
        <div className={classes.data_item}>
          <span>Zipcode:</span>
          <input type="text" value={zipcode} disabled />
        </div>
      </Card>
    </div>
  );
};

OtherData.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  onClickOtherData: PropTypes.func.isRequired,
};

export default OtherData;
