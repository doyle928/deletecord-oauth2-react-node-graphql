import React, { useState } from "react";
import axios from "axios";

const SetToken = params => {
  const [getValues, setValues] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    console.log(getValues);
    await axios
      .post(
        "http://localhost:8080/api",
        {
          query: `mutation {
      setToken(token: "${getValues}") {
        token
      }
    }`
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(async res => {
        await axios
          .get("http://localhost:8080/client")
          .then(res => {
            console.log(res);
            params.setClient(res.data);
          })
          .catch(error => {
            console.log(error);
          });
      });
  };

  return (
    <div className="set-token">
      <input onChange={e => setValues(e.target.value)} />
      <button onClick={e => handleSubmit(e)}>Submit</button>
    </div>
  );
};

export default SetToken;
