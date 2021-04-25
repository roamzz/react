import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

//add comment
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

//fetch disesh
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

//dishes loading
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

//dishes failed
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload:errmess
});

//add dishes
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});