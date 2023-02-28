import React from "react";
import { useEffect, useState } from "react";

const FormSection = () => {
  const [message, setMessage] = useState("");
  const host = "localhost";
  const port = 8080;
  useEffect(() => {
    getHomepageText();
  }, []);
  const getHomepageText = async () => {
    fetch(`http://${host}:${port}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
        console.log(message);
        setMessage(message);
      });
  };
  return <div>{message}</div>;
};

export default FormSection;
