import {combineReducers} from 'redux';

initialState = {
  name: 'prawito hudoro',
};

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'Ini adalah desc untuk register',
};

const initialStateLogin = {
  info: 'Tolong masukkan password anda',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Register Ganti Title',
    };
  }
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

// const reducer = (state = initialState, action) => {
//   return state;
// };
const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
