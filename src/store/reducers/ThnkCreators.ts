import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";
//
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.setLoading(true))
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.setUsers(response.data))
//     } catch (err) {
//         if (axios.isAxiosError(err) && err.response) {
//             dispatch(userSlice.actions.usersFetchingError(err.message))
//             return
//         }
//         dispatch(userSlice.actions.usersFetchingError('Some error'))
//     } finally {
//         dispatch(userSlice.actions.setLoading(false))
//     }
// }


export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
)