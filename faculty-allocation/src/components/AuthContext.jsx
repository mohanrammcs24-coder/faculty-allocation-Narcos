import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Hardcoded User
  const [user, setUser] = useState({
    id: 1,
    name: "Dr. Rajesh Kumar",
    email: "rajesh@fwps.edu",
    role: "ADMIN",
    department: "Computer Science",
  });

  const [loading] = useState(false);

  // Dummy Login
  const login = async (credentials) => {
    console.log("Login Credentials:", credentials);

    const loggedInUser = {
      id: 1,
      name: "Dr. Rajesh Kumar",
      email: "rajesh@fwps.edu",
      role: "ADMIN",
      department: "Computer Science",
    };

    setUser(loggedInUser);

    return loggedInUser;
  };

  // Dummy Logout
  const logout = async () => {
    console.log("Logout Success");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
