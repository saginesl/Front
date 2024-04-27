import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 
 
export const baseQuery = fetchBaseQuery({ 
  baseUrl: 'http://localhost:8000', 
}); 
 
export const getUsers = createApi({ 
  reducerPath: 'userApi', 
  baseQuery: baseQuery, 
  endpoints: (builder) => ({ 
    getUsers: builder.query({ 
      query: () => '/users/', 
    }), 
  }), 
}); 
 
export const { useGetUsersQuery } = getUsers;