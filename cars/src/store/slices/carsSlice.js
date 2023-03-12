import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.data.push({
                // action.payload === { name: 'ab', cost: 1240 }
                name: action.payload.name,  // Vi måste skicka med bägger dessa i vår payload
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            // action.payload === Car id
            const updated = state.data.filter((car) => car.id !== action.payload);
            state.data = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;