import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
  const {username} = useContext(AuthContext)
  return (
    <div>
      Home
      {username}
    </div>
  );
};

export default Home;