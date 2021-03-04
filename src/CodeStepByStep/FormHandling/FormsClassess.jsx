import React, { Component } from "react";

class FormsClassess extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
    };
  }
  valid() {
    if (this.state.user.includes("@")) {
      return this.setState({ userError: "invalid name" });
      //   console.warn(this.state);
    }
    // return this.setState({ useError: "valid name" });
  }
  submit() {
    if (this.valid()) {
      alert("form ha been submitted");
      //   console.warn(this.state);
    }
  }
  render() {
    return (
      <div>
        <p>
          forms using class by code step by step (this is uncontrolled
          component)
        </p>
        {/* <form> */}
        <label htmlFor="codeclass">userName</label>
        <input
          type="text"
          name="user"
          id="codeclass"
          onChange={(e) => {
            this.setState({ user: e.target.value });
          }}
        />
        <p>{this.state.userError}</p>
        <button onClick={() => this.submit()}>submitcode</button>
        {/* </form> */}
      </div>
    );
  }
}

export default FormsClassess;
