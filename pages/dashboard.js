import useAuth from "src/hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Bem vindo {user?.displayName}!</h1>
    </div>
  );
};

export default Dashboard;
