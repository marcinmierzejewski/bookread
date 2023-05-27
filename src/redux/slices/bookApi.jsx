import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "questifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookread-backend.goit.global",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "Books"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUserData) => ({
        url: "/auth/register",
        method: "POST",
        body: newUserData,
      }),
      invalidatesTags: ["Auth"],
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    // refresh: builder.mutation({
    //   query: (sid) => ({
    //     url: "/auth/refresh",
    //     method: "POST",
    //     body: sid,
    //   }),
    //   invalidatesTags: ["Auth"],
    // }),
    addBook: builder.mutation({
      query: (bookData) => ({
        url: "/book",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["Auth", "Books"],
    }),
    reviewBook: builder.mutation({
      query: (bookData) => ({
        url: `/book/review/${bookData.id}`,
        method: "PATCH",
        body: bookData.body,
      }),
      invalidatesTags: ["Auth", "Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    getAllUserBooks: builder.query({
      query: () => "/user/books",
      providesTags: ["Auth", "Books"],
    }),    
    startPlanning: builder.mutation({
      query: (planningData) => ({
        url: "/planning",
        method: "POST",
        body: planningData,
      }),
      invalidatesTags: ["Auth", "Books"],
    }),
    getCurrentPlanning: builder.query({
      query: () => "/planning",
      providesTags: ["Auth", "Books"],
    }),
    addPages: builder.mutation({
      query: (pages) => ({
        url: `/planning`,
        method: "PATCH",
        body: pages,
      }),
      invalidatesTags: ["Auth", "Books"],
    }),
    // completeCard: builder.mutation({
    //   query: (id) => ({
    //     url: `/card/complete/${id}`,
    //     method: "PATCH",
    //   }),
    //   invalidatesTags: ["Auth", "Card"],
    // }),
  }),
});

export const {
	useRegisterMutation,
	useLoginMutation,
	useLogoutMutation,
	// useRefreshMutation,
	useAddBookMutation,
	useReviewBookMutation,
	useDeleteBookMutation,
	useGetAllUserBooksQuery,
	// useCompleteCardMutation,
  useStartPlanningMutation,
  useGetCurrentPlanningQuery,
  useAddPagesMutation,
} = bookApi;
