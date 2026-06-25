import axios from "axios";

// Create base Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, // Important for sending/receiving httpOnly cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Response Interceptor for Token Refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh token
        // The backend uses the refreshToken httpOnly cookie automatically
        await axios.post(
          "http://localhost:5000/api/v1/auth/refresh",
          {},
          { withCredentials: true }
        );

        // If refresh successful, retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, user needs to login again
        // We handle this gracefully in the AuthContext (checking /users/me will fail)
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
