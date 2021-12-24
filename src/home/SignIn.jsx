import { useSelector } from "react-redux";
import Loader from "./Loader";
import Error from "./Error";
import PropTypes from "prop-types";
//import { signIn } from '~/redux/modules/sign-in'

const SignIn = () => {
  const { isLoading, data, error } = useSelector((state) => state.oidc);

  const signIn = (event) => {
    event.preventDefault();
    // signIn();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (data) {
    return <div />;
  }

  return (
    <div>
      <button onClick={(event) => signIn(event)}>Sign in</button>
    </div>
  );
};

export default SignIn;

SignIn.propTypes = {
  signIn: PropTypes.func,
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  error: PropTypes.object,
};
