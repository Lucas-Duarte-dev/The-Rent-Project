import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function takeUser() {
      const token = localStorage.getItem("@Permission:token");
      const response = await api.get("/login", {
        headers: {
          "authorization": `Bearer ${token}`,
        },
      });

      setUser(response.data);
    }
    takeUser();
  }, []);
  console.log(user)
  return (<div>
  </div>);
}
