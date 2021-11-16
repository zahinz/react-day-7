import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { resetRegister, submitRegister } from "../../actions";
import LoadingAnimation from "../../lotties/loadingAnimation";

class Register extends React.Component {
  submitRegister(e) {
    e.preventDefault();

    // validate field not empty
    if (
      !this._email.value ||
      !this._password.value ||
      !this._confirmPassword.value
    ) {
      alert("Fill in the form");
      return;
    }

    // confirm same password
    if (this._password.value !== this._confirmPassword.value) {
      alert("Password not match");
      return;
    }

    // push newUser into store

    // console.log(this._email.value, this._password.value);
    const newUser = {
      key: Date.now(),
      email: this._email.value,
      password: this._password.value,
    };
    console.log(newUser);
    this.props.submitRegister(newUser);

    setTimeout(() => {
      console.log(this.props.userJSON);
    }, 4000);
  }

  resetRegister() {
    this.props.resetRegister();
  }

  render() {
    return (
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="lg:w-1/3 md:w-3/5 sm:w-5/6 text-center">
          <p className="text-3xl font-bold mb-8">Hello New User ✌️</p>
          <form className="w-full" onSubmit={(e) => this.submitRegister(e)}>
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
            <input
              type="password"
              placeholder="Repeat password"
              className="bg-white w-full rounded px-3 py-2 mb-4"
              ref={(e) => (this._confirmPassword = e)}
            />
            {!this.props.registerData.isSignedUp ? (
              this.props.registerData.isLoading ? (
                <button
                  type="button"
                  disabled
                  className="bg-gray-400 text-gray-500 animate-pulse font-semibold w-full rounded px-3 py-2 mt-4 mb-4"
                >
                  <LoadingAnimation />
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4"
                >
                  Sign up
                </button>
              )
            ) : (
              <Link to="/">
                <button
                  type="button"
                  className="bg-green-600 text-white font-semibold w-full rounded px-3 py-2 mt-4 mb-4"
                >
                  Finished
                </button>
              </Link>
            )}
          </form>

          {!this.props.registerData.isSignedUp ? (
            <Link to="/">
              <button
                type="submit"
                className="text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4"
              >
                Signed up already? Login here
              </button>
            </Link>
          ) : (
            <button
              onClick={() => this.resetRegister()}
              className="text-blue-600 font-semibold w-full rounded px-3 py-2 mb-4"
            >
              Register again
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  registerData: state.register,
  userJSON: JSON.stringify(state.register.data),
});

const mapDispatchToProp = {
  submitRegister: submitRegister,
  resetRegister: resetRegister,
};

export default connect(mapStateToProp, mapDispatchToProp)(Register);
