import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/icecream');
        console.log(response.data);
        setIsVerified(response.data.isVerified);
      } catch (err) {
        console.log("you're getting an error");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isVerified) {
      navigate('/');
    } else {
      navigate('/icecream');
    }
  }, [isVerified]);

  return (
    <div>
      <Box m="10rem 5rem">
        <Box>
          <img src="/images/ice-cream.jpg" alt="" />
          <h2>Taste your Ice-Cream</h2>
          <ul className="list">
            <li>
              <a href="/icecream">More Flavours</a>
            </li>
          </ul>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
