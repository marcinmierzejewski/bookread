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
    // editCard: builder.mutation({
    //   query: (cardData) => ({
    //     url: `/card/${cardData.id}`,
    //     method: "PATCH",
    //     body: cardData.body,
    //   }),
    //   invalidatesTags: ["Auth", "Card"],
    // }),
    // deleteCard: builder.mutation({
    //   query: (id) => ({
    //     url: `/card/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["Card"],
    // }),
    getAllUserBooks: builder.query({
      query: () => "/user/books",
      providesTags: ["Auth", "Books"],
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
	// useEditCardMutation,
	// useDeleteCardMutation,
	useGetAllUserBooksQuery,
	// useCompleteCardMutation,
} = bookApi;
