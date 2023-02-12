import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "./Slice/loginSlice";
import { Store } from "../../../store/types/store";
import AuthContainer from "../../Common/Auth/AuthContainer";
import ButtonDeative from "../../Common/Element/ButtonDeative";
import { blue } from "../../Common/styles/commonColor";
import {
  emailValidator,
  passwordValidator,
} from "../../Common/Util/validation";
import { loginAPI } from "./Api/login";
import useLogin from "./Hooks/useLogin";
import { ILoginProps } from "./Types/login";
import { retrieveStoredToken } from "./Utils/token";
import LoginView from "./Views/LoginView";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const feedbackMessage = useSelector(
    (state: Store) => state.login.feedbackMessage
  );

  const {
    value: emailValue,
    isValid: isEmailValid,
    isFeedback: isFeedbackEmail,
    handleChangedValue: handleChangedEmail,
    handleInputBlured: handleEmailInputBlured,
    resetInputState: resetEmailInputState,
  } = useLogin(emailValidator);

  const {
    value: passwordValue,
    isValid: isPasswordValid,
    isFeedback: isFeedbackPassword,
    handleChangedValue: handleChangedPassword,
    handleInputBlured: handlePasswordInputBlured,
    resetInputState: resetPasswordInputState,
  } = useLogin(passwordValidator);

  const handleMoveSignUp = () => {
    navigate("/signup");
  };

  const handleMoveHome = () => {
    navigate("/", { replace: true });
  };
  const dispatchLogout = () => dispatch(loginAction.logout());
  const dispatchLogin = () => dispatch(loginAction.login());
  const dispatchNotFoundEmail = () => dispatch(loginAction.notFoundEmail());
  const dispatchInvalidPassword = () => dispatch(loginAction.invalidPassword());

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      loginAPI
        .login(emailValue, passwordValue, dispatchLogout)
        .then((response) => {
          switch (response) {
            case "SUCCESS_LOGIN": {
              handleMoveHome();
              resetEmailInputState();
              resetPasswordInputState();
              dispatchLogin();
              break;
            }
            case "EMAIL_NOT_FOUND": {
              dispatchNotFoundEmail();
              break;
            }
            case "INVALID_PASSWORD": {
              dispatchInvalidPassword();
              break;
            }
          }
        });
    }
  };

  const isDeactiveLogin = [isEmailValid, isPasswordValid].every(
    (boolean) => !!boolean
  );

  useEffect(() => {
    dispatch(loginAction.resetFeedback());

    const tokenData = retrieveStoredToken();

    if (tokenData) {
      navigate("/", { replace: true });
    }
  }, [dispatch]);

  const loginProps: ILoginProps = {
    feedbackMessage,
    emailValue,
    passwordValue,
    isFeedbackEmail,
    isFeedbackPassword,
    onBluredEmail: () => handleEmailInputBlured(),
    onBluredPassword: () => handlePasswordInputBlured(),
    onChangedEmail: handleChangedEmail,
    onChangedPassword: handleChangedPassword,
    onSubmitLogin: (e) => handleSubmitLogin(e),
  };

  const authContainerProps = {
    onMove: () => handleMoveSignUp(),
    moveText: "회원가입하러 갈래요!",
  };

  const buttonDeativeProps = {
    isDeactivation: !isDeactiveLogin,
    color: "#333",
    hoverColor: blue,
    backgroundColor: "#fff",
    isSubmit: true,
  };

  return (
    <AuthContainer {...authContainerProps}>
      <LoginView {...loginProps}>
        <ButtonDeative {...buttonDeativeProps}>로그인</ButtonDeative>
      </LoginView>
    </AuthContainer>
  );
};

export default Login;