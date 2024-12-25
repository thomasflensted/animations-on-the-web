import LoginBtn from "./LoginBtn";

const ButtonAnimation = () => {
  return (
    <LoginBtn
      content={{
        idle: "Send me a login link",
        loading: "Sending...",
        success: "Check your email!",
      }}
    />
  );
};
export default ButtonAnimation;
