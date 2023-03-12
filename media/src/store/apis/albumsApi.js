import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

const albumsApi = createApi({

    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {                  // Wrappa funktionen i detta
            
            // Remove for production!
            await pause(1000);                  
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            removeAlbum: builder.mutation({
                //invalidatesTags: (result, error, album) => [{ type: 'Album', id: album.userId }],
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.id }];       // Refresha alla albumets taggar också
                },
                query: (album) => {
                    return {
                        method: 'DELETE',
                        url: `/albums/${album.id}`,
                    };
                }
            }),

            addAlbum: builder.mutation({                    // useAddAlbumMutation
                //invalidatesTags: (result, error, arg) => [{ type: 'Album', id: arg.id }],       // variant på ovan. arg = user
                invalidateTags: (result, error, user) => {
                    return [{ type: 'UsersAlbums', id: user.id }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName(),
                        }
                    }
                }
            }),

            fetchAlbums: builder.query({                // genererar en hook som heter useFetchAlbumQuery
                //providesTags: (result, error, user) => [{ type: 'Album', id: user.id }],        // En "Fine-Grained Tag"
                // Här lägger vi till både användarens Id + alla album som taggar. Om vi refreshar antingen använadar-taggen eller någon av album-taggarna så rerfreshar vi det här objektet

                providesTags: (result, error, user) => {
                    const tags = result.map((album) => {
                        return { type: 'Album', id: album.id };
                    });
                    tags.push({ type: 'UsersAlbums', id: user.id });
                    return tags;
                },
                query: (user) => {                      // Parameter till kroken useFetchAlbumQuery(user)
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            }),
        }
    }
});

export const { 
    useRemoveAlbumMutation,
    useFetchAlbumsQuery, 
    useAddAlbumMutation 
} = albumsApi;
export { albumsApi };