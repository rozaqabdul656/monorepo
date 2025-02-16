import axios from 'axios';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Ambil dari env

const fetchTokenUser = async () => {
  const storedUser = localStorage.getItem('user');
  if (!storedUser) throw new Error('User not logged in');

  const user = JSON.parse(storedUser);
  const {
    _tokenResponse: {
        idToken
    }
  } = user;
  return idToken;
};
export const fetchUserData = async () => {
  const storedUser = localStorage.getItem('user');
  if (!storedUser) throw new Error('User not logged in');

  const user = JSON.parse(storedUser);
  const {
    _tokenResponse: {
        idToken
    }
  } = user;
  const response = await axios.get(`${BASE_URL}/api/fetch-user-data`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  return response.data;
};

export const updateUserData = async (userData: { name: string; email: string, age: number }) => {
  const idToken = await fetchTokenUser();
  const response = await axios.put(
    `${BASE_URL}/api/update-user-data`,
    userData,
    {
    headers: {
      Authorization: `Bearer ${idToken}`,
    }
  });
  return response.data;
};
