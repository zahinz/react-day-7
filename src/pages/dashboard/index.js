import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div className="lg:w-1/3 md:w-3/5 sm:w-5/6 text-center">
          <p className="text-3xl font-bold mb-8">
            Hello {this.props.userData.email} 🚀
          </p>
          <Link to="/">
            <button className="w-2/3 border-2 border-blue-600 text-blue-600 font-semibold rounded px-3 py-2 mt-4">
              Return to login page
            </button>
          </Link>
          <div>
            {/* {this.props.userData.map((list) => (
              <div className="bg-white p-5">
                <p>{list.email}</p>
                <p>{list.key}</p>
                <p>{list.password}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  userData: state.signin.user,
});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(Dashboard);
