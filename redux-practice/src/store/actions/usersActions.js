import {GET_USERS, USERS_ERROR} from '../type'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/1/posts`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}