import { combineReducers } from 'redux';
import userProfileSlice from './userProfileSlice';

// all redux slices are registered here and implemented/defined separately
export default combineReducers({
    userProfileSlice
});