// services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchCampers = async (page = 1, limit = 4, filters = {}) => {
  const response = await api.get('/campers', {
    params: {
      page,
      limit,
      ...filters, // додаємо фільтри (location, form, etc.)
    },
  });
  return response.data;
};

export const fetchCamperById = async (id: string) => {
  const response = await api.get(`/campers/${id}`);
  return response.data;
};