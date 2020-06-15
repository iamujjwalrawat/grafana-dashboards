import { apiRequest } from '../react-plugins-deps/components/helpers/api';

export const SettingsService = {
  getSettings() {
    return apiRequest.post<any, any>('/v1/Settings/Get', {});
  },
  setSettings(body) {
    return apiRequest.post<any, any>('/v1/Settings/Change', body);
  },
};