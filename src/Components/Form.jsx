import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (name.length <= 5) {
      setError("Please verify your information again");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please verify your information again");
      return;
    }

    setSuccess(`Thank you ${name}, we will contact you as soon as possible via email`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> FULL NAME:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>E-MAIL:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">SUBMIT</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};

export default Form;
