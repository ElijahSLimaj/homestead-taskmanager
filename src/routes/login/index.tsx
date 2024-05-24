import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <AuthPage
      type="login"
      registerLink={
        <div
          style={{
            padding: 3,
          }}
        >
          <Link to="/signup">Don't have an account? Signup</Link>
        </div>
      }
      forgotPasswordLink={false}
      title={<ThemedTitleV2 collapsed={false} text="Refine Project" />}
    />
  );
};
