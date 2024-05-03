import React from "react";
import Card from "./Card";

const OtherData = ({ street, city, zipcode, onClickOtherData }) => {
  return (
    <div onClick={() => onClickOtherData(false)}>
      <Card className={"other_data"}>
        <label>Street:</label>
        <input type="text" value={street} disabled />
        <label>City:</label>
        <input type="text" value={city} disabled />
        <label>Zipcode:</label>
        <input type="text" value={zipcode} disabled />
      </Card>
    </div>
  );
};

export default OtherData;
