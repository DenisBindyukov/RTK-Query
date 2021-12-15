import {IUser} from "../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ThnkCreators";

interface UserState {
    users: IUser []
    isLoading: boolean
    error: string
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        usersFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setUsers(state, actions: PayloadAction<Array<IUser>>) {
            state.users = actions.payload
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action) => {

        },
        [fetchUsers.pending.type]: (state, action) => {

        },
        [fetchUsers.rejected.type]: (state, action) => {

        }
    }
});

export default userSlice.reducer;