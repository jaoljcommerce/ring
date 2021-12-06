import axios from 'axios';

import { Planet} from '../model/planetModel';

export const PlanetApi = {
  getAll: () => {
    return axios.get<Planet[]>('/api/planets', { 
      withCredentials: false,
      responseType: 'json'
    });
  },
};
