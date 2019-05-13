import uuid from 'uuid'

const defaultState = { restaurants: [], reviews: [] }

export default function manageRestaurants(state = defaultState, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const newRestaurant = { text: action.text, id: uuid() };
      return { ...state, restaurants: [ ...state.restaurants, newRestaurant] }

    case 'DELETE_RESTAURANT':
      const updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      // console.log(restaurants)
      return { ...state, restaurants: updatedRestaurants }

    case 'ADD_REVIEW':

      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: uuid() };
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const updatedReviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews: updatedReviews }

    default:
      return state;

  }
};
