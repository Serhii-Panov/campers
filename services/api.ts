import axios from 'axios';
import { CamperListResponse, CamperListItem } from '@/types/camper';

const api = axios.create({
  baseURL: 'https://campers-api.goit.study/campers',
});

export const fetchCampers = async (page = 1, perPage = 4, filters = {}): Promise<CamperListResponse> => {
  const response = await api.get('', {
    params: {
      page,
      perPage,
      ...filters,
    },
  });
  return response.data; 
};

export const fetchCamperById = async (camperId: string): Promise<CamperListItem> => {
  const response = await api.get(`/${camperId}`);
  return response.data;
};

export const fetchFilters = async () => {
  const response = await api.get('/filters');
  return response.data;
};

export const sendBooking = async (data: { name: string; email: string; camperId: string }) => {
  const response = await api.post(`/${data.camperId}/booking`, data);
  return response.data;
};