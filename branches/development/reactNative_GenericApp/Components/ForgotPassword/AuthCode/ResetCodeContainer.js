import { connect } from "react-redux";
import ResetCode from "./ResetCode";
import { UserServer } from "./ResetCode_Server";

const mapStateToProps = state => {

  return {
    AuthResetCode_status: state.AuthResetCode_Reducer.AuthResetCode_status,
    error: state.AuthResetCode_Reducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CheckResetCode: (data) => {

      UserServer.checkResetCode(data)

    },
  }
};
const ResetCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetCode)

export default ResetCodeContainer
