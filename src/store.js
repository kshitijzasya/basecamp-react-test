import { configureStore } from '@reduxjs/toolkit'


// Contact List supposed to be come from an API
// But API token was expired. 
// Therefore I have to write static contact List with the same schema as the API !

const initialState = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },

  {
    id: 2,
    first_name: "Miley",
    last_name: "Stewart",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 3,
    first_name: "Mark",
    last_name: "Zuck",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 4,
    first_name: "Rahul",
    last_name: "Sharma",
    country_id: 108,
    phone_number: "9404480524",
  },
  {
    id: 5,
    first_name: "Priya",
    last_name: "Sharma",
    country_id: 108,
    phone_number: "9404480524",
  },
  {
    id: 6,
    first_name: "Kevin",
    last_name: "Alderson",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 7,
    first_name: "Chloe",
    last_name: "Parker",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 8,
    first_name: "Angela",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 9,
    first_name: "Jenny",
    last_name: "Smith",
    country_id: 226,
    phone_number: "9404480524",
  },
  {
    id: 10,
    first_name: "Priyanka",
    last_name: "",
    country_id: 108,
    phone_number: "9404480524",
  },
]

// I didn't implement any dispatch action. 
// Other action isn't other than `store.getState()`
// Now Filter options namely: 'show US Contacts Only' & 'show contacts with Even ID only'
// in the App Component!
function contactReducer(state = initialState, action) {
    return state
  }

const store = configureStore({reducer:contactReducer})

export default store;