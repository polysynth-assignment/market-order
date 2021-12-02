const initialState = {
  avatar: "",
  customToken: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  token: "",
  _id:""
};

const userProfileSlice = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGOUT":
      return {
        ...initialState
      };
    case "USER_EMAIL_VERIFIED":
      return {
        ...state,
        avatar: action.payload.avatar,
        customToken: action.payload.customToken,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
        token: action.payload.token,
        _id:action.payload._id
      };
    default:
      return state;
  }
};

export default userProfileSlice;
