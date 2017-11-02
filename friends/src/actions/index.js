import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';

export const getFriends = () => {
    const friendsEndpoint = 'http://localhost:5000/friends';
    const friends = axios.get(friendsEndpoint);

    return {
        type: GET_FRIENDS,
        payload: friends,
    };
};

export const addFriends = (friend) => {
    const friendsEndpoint = 'http://localhost:5000/friends';
    const friends = axios.post(friendsEndpoint, friend);
    
    return {
        type: ADD_FRIENDS,
        payload: friends,
    };
};