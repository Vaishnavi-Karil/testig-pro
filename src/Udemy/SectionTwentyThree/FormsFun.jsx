import React, { useState } from "react";

const FormsFun = React.memo((props) => {
  const formUdemy = useState({
    userName: "",
    password: "",
  });

  const FormSubmitHandlerUdemy = (event) => {
    event.preventDafault();
    // console.log(event);
          

  };

  return (
    <div>
      <form onSubmit={FormSubmitHandlerUdemy}>
        <div>
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={formUdemy[0].userName}
            onChange={(event) =>
              formUdemy[1]((previousState) => ({
                userName: event.target.value,
                password: previousState.password,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={formUdemy[0].password}
            onChange={(event) =>
              formUdemy[1]((previousState) => ({
                password: event.target.value,
                userName: previousState.userName,
              }))
            }
          />
        </div>
        <div>
          <button type="submit"> submit</button>
        </div>
      </form>
    </div>
  );
});

export default FormsFun;
