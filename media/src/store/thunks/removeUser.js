import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const removeUser = createAsyncThunk('users/remove', async (user) => {

    await axios.get(`http://localhost:3005/users/${user.id}`);

    await pause(1000); 

    return user;        // response.data (payload == null)
});

// DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export { removeUser };