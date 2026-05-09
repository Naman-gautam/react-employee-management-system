import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getlocaStorage, setlocaStorage } from './utils/localstorage'
import { Authpov } from './context/authcontext'

const App = () => {
  const Authdata = useContext(Authpov);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const[loggedInAdminData,setAdminData]=useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const useData = JSON.parse(loggedInUser);
      setUser(useData.role);
      setloggedInUserData(useData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser("admin");
      const admin=Authdata?.admin;
      setAdminData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin",data:admin }));
    } else {
      const employee = Authdata?.employee?.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("invalid credentials");
      }
    }
  };

  // ✅ CONDITIONAL RETURNS HERE (NOT INSIDE JSX)
  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  if (user === "admin") {
    return <AdminDashboard data={loggedInAdminData} />;
  }

  if (user === "employee") {
    return <EmployeeDashboard data={loggedInUserData} />;
  }
};

export default App;