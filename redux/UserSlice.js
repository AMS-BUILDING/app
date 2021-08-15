import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        accountId: null,
        user: null
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
            return state;
        },
        addAccountId: (state, action) => {
            state.accountId = action.payload;
            return state;
        },
        addUser: (state, action) => {
            state.user = action.payload;
            return state;
        },
        clearState: () => {
            return {}
        }
    }
})

export const { addToken, addAccountId, clearState, addUser } = userSlice.actions
export default userSlice.reducer