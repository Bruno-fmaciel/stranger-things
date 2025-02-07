import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Character {
    id: string;
    name: string;
    photo: string;
  }

export const strangerThingsAPI = createApi({
    reducerPath: "strangerThingsAPI",
    baseQuery: fetchBaseQuery({baseUrl: "https://stranger-things-api.fly.dev/"}),
    endpoints: (builder) => ({
        getCharacters: builder.query<Character[], void>({
            query: () => "api/v1/characters",
        }),
    }),
}); 

export const { useGetCharactersQuery } = strangerThingsAPI;