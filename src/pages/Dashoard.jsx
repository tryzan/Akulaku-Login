import { getProfileMethod } from "../api/AxiosService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const token = localStorage.getItem("token");
  const [dashboardData, setDashboardData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProfileMethod(token);
        console.log(data);
        setDashboardData(data.data);
      } catch (error) {
        if (error.response.data.message === "Token Expired") {
          alert(error.response.data.message);
          navigate("/login");
        } else {
          alert(error);
        }
      }
    };
    loadData();
  }, []);

  const handleButton = () => {
    localStorage.removeItem("token");
    alert("Logout Success");
    navigate("/login");
  };

  return (
    <>
      {dashboardData ? (
        <>
          <h1>
            Nama : {dashboardData.firstName + " " + dashboardData.lastName}
          </h1>
          <h1>Alamat : {dashboardData.address}</h1>
          <h1>No Hp : {dashboardData.phoneNo}</h1>
          <button onClick={handleButton}>Log out</button>
        </>
      ) : (
        <h1>loading data</h1>
      )}
    </>
  );
}

export default Dashboard;
