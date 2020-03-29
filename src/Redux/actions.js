export const FETCH_ACTIVITY_PENDING = 'FETCH_ACTIVITY_PENDING';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_ERROR = 'FETCH_ACTIVITY_ERROR';

function fetchActivityPending() {
    return {
        type: FETCH_ACTIVITY_PENDING
    }
}

function fetchActivitySuccess(activity) {
    return {
        type: FETCH_ACTIVITY_SUCCESS,
        activity
    }
}

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error : error
    }
}