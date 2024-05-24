import { AuthPage } from "@refinedev/antd";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <AuthPage
      type="register"
      loginLink={
        <div
          style={{
            padding: 3,
          }}
        >
          <Link to="/login">Already have an account? Sign in</Link>
        </div>
      }
    />
  );
};
