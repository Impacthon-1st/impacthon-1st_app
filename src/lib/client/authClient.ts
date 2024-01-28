import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authClient = axios.create({
  baseURL: 'https://precise-socially-mackerel.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

authClient.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('access');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  _ => {},
);

export default authClient;
