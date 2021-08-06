import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user, signin } = useAuth();
  console.log(user);
  return (
    <div>
      <h2>
        Bem vindo!
        <br />
        Me chamo Pablo Winck Winter.
      </h2>

      <button onClick={() => signin()}>Entrar com github</button>
    </div>
  );
}
