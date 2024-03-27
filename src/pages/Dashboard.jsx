import Navbar from "../components/Navbar";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center mt-5">Welcome to dashboard {username}</h1>
    </div>
  );
};

export default Dashboard;
