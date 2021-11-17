import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { submitSignIn } from "../../actions";

class SignIn extends React.Component {
  submitSignIn(e) {
    e.preventDefault();

    // validate field not empty
    if (!this._email.value || !this._password.value) {
      alert("Fill in the form");
      return;
    }

    // check the email from the global state
    const foundUser = this.props.userData.find(
      (list) => list.email === this._email.value
    );
    console.log(foundUser);
    if (foundUser === undefined) {
      alert(`No user ${this._email.value} in the local storage`);
      return;
    }

    // check if the password is correct
    if (foundUser.password !== this._password.value) {
      alert("Password is incorect!");
      return;
    } else {
      console.log("foundUser: ", foundUser);
      this.props.submitSignIn(foundUser);
      return this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      // redirect when state signedIn
      // {this.props.signedInStatus == true ? }

      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="lg:w-1/3 md:w-3/5 sm:w-5/6 text-center">
          <p className="text-3xl font-bold mb-8">Welcome 👋</p>
          <form className="w-full" onSubmit={(e) => this.submitSignIn(e)}>
            <input
              type="email"
              placeholder="Email"
              className="bg-white w-full rounded px-3 py-2 mb-4"
              ref={(e) => (this._email = e)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white w-full rounded px-3 py-2 mb-4"
              ref={(e) => (this._password = e)}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4"
            >
              Login
            </button>
          </form>
          <Link to="/register">
            <button
              type="button"
              className="text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4"
            >
              Register New Account
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  userData: state.register.data,
  signedInStatus: state.register.isSignIn,
});

const mapDispatchToProp = {
  submitSignIn: submitSignIn,
};

export default connect(mapStateToProp, mapDispatchToProp)(SignIn);
