import Navbar from "../components/Navbar";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">Welcome to dashboard</h1>
      <h3>Hi {username},</h3>
      <section style={{fontSize: "20px"}}>
        <p>
          This is a password reset task. You can reset your forgotten password
          using the following stpes:
        </p>
        <ol>
          <li>
            Click the <b>"fogot password"</b> link in the login page (you can find the
            link below the <b>"Sign In"</b> button).
          </li>
          <li>
            Once you click <b>"forgot password"</b>, it will redirect you to the forgot
            password page. There you can give your registred email and then
            click <b>"Send Email"</b> button.
          </li>
          <li>
            The system sent a mail to your registred email along with reset
            password link.
          </li>
          <li>
            Click the reset password link in the mail and you can reset the
            password.
          </li>
        </ol>
      </section>
      <h2 class="text-center">Enjoy Your Day......</h2>
    </div>
  );
};

export default Dashboard;
