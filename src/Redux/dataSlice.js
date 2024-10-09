import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        getAllUser: [
            {
                id : 1,
                name: "abcd",
                email: "abcd@gmail.com"
            },
            {
                id : 2,
                name: "efgh",
                email: "efgh@gmail.com"
            },

        ],
        edit: {
            data: {},
            isEdit: false,
        }
    },
    reducers: {
        getAllUser: (state, action) => {
            return {
                ...state,
                getAllUser: action.payload
            }
        },

        createUser: (state, action) => {
          state.getAllUser=[...state.getAllUser,action.payload]
        },

        deleteUser: (state, action) => {
            return {
                ...state,
                getAllUser: state.getAllUser.filter((user, index) => index !== action.payload)
            }
        },
        editUser: (state, action) => {
            return {
                ...state,
                edit: {
                    data: action.payload,
                    isEdit: true,
                }
            }
        },
        updateUser: (state, action) => {
            // console.log(action.payload)
            return {
                ...state,
                getAllUser: state.getAllUser.map((item, index)=>item.id==action.payload.id?action.payload:item),
                edit: {
                    data: {},
                    isEdit: false,
                }
            }
        }
    }


})
export const { editUser, deleteUser, createUser,updateUser } = userSlice.actions
export default userSlice.reducer