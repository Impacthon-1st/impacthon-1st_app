import axios from 'axios';

export const defaultClient = axios.create({
  baseURL: 'https://precise-socially-mackerel.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
