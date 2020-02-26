const authReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null, error: null };
    case "ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
