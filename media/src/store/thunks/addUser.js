import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { faker } from '@faker-js/faker';

const addUser = createAsyncThunk('users/add', async () => {

    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName()
    });

    console.log("A")
    await pause(1000); 

    console.log("B")

    return response.data;           // Data = payload

});

// DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export { addUser };