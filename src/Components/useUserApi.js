import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useUserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [history, setHistory] = useState([]);
  const [cookies] = useCookies(["access_token"]);

  useEffect(() => {
    const getUser = async () => {
      try {
        // JWT token from cookies
        const token = cookies.access_token; 
        const response = await axios.get("http://localhost:8080/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsLogged(true);
        setIsAdmin(response.data.isAdmin); // Set the isAdmin value from the API response
        // setCart(response.data.cart);
      } catch (error) {
        alert(error.response.data.msg);
      }
    };

    if (token) {
      getUser();
    }
  }, [token]);

  return {
    isLogged,
    setIsLogged,
    isAdmin,
    setIsAdmin,
    history,
    setHistory,
  };
};

export default useUserAPI;
