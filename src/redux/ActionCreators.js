import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

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

// ------------------------ DISHES ACTION  ----------------------------------- //
//fetch the dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(res => res.json())
        .then(dishes => dispatch(addDishes(dishes)));
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


// ------------------------ COMMENTS ACTION  ----------------------------------- //
//fetch the comments
export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)));
}


//add comments
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//comments failed
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

// ------------------------ PROMOS ACTION  ----------------------------------- //
//fetch the promos
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(res => res.json())
        .then(promos => dispatch(addPromos(promos)));
}

//promos loading
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

//promos failed
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload:errmess
});

//add promos
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});