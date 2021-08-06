import useAuth from "../hooks/useAuth";
const Dashboard = () => {
  const { user, signin } = useAuth();
  return (
    <div>
      <h1>Bem vindo {user?.displayName}!</h1>
    </div>
  );
};

export default Dashboard;
