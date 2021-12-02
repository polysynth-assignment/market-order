export const userActions = {
  logout,
  initUserEmailVerification,
  saveUserEmail,
  initUserLogout,
  userEmailVerified,
  referralApplied,
  referralRemoved,
  signUpCompleted,
  registerPreAppliedReferral,
};

function logout() {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
    });
  };
}

function initUserEmailVerification(e) {
  return (dispatch) => {
    dispatch({
      type: "USER_EMAIL_VERIFY",
      payload: e,
    });
  };
}
function saveUserEmail(e) {
  return (dispatch) => {
    dispatch({
      type: "USER_EMAIL",
      payload: e,
    });
  };
}
function initUserLogout(e) {
  return (dispatch) => {
    dispatch({
      type: "USER_LOGOUT",
      payload: e,
    });
  };
}
function userEmailVerified(e) {
  return (dispatch) => {
    dispatch({
      type: "USER_EMAIL_VERIFIED",
      payload: e,
    });
  };
}
function referralApplied(e) {
  return (dispatch) => {
    dispatch({
      type: "REFERRAL_APPLIED",
      payload: e,
    });
  };
}
function referralRemoved() {
  return (dispatch) => {
    dispatch({
      type: "REFERRAL_REMOVED",
    });
  };
}
function signUpCompleted() {
  return (dispatch) => {
    dispatch({
      type: "SIGNUP_COMPLETED",
    });
  };
}
function registerPreAppliedReferral(e) {
  return (dispatch) => {
    dispatch({
      type: "PREAPPLIED_REFERRAL",
      payload: e,
    });
  };
}
