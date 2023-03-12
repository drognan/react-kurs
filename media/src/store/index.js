import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './slices/usersSlice';

import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

export const store = configureStore({           
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,          // Hitta nyckelvärde från reducerPath och skapa en ny nyckel med en. Tilledla reducer som vanligt
        [photosApi.reducerPath]: photosApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumsApi.middleware)
            .concat(photosApi.middleware)
    }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';        // Skarva bara vidare det som exporteras från fetchUsers 
export * from './thunks/addUser';           // Skarva bara vidare det som exporteras från addUser 
export * from './thunks/removeUser';        // Skarva bara vidare det som exporteras från addUser 

export { 
    useRemoveAlbumMutation,
    useFetchAlbumsQuery,
    useAddAlbumMutation,
} from './apis/albumsApi';

export {
    useFetchPhotosQuery, 
    useAddPhotoMutation,
    useRemovePhotoMutation,
} from './apis/photosApi';

