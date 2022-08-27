import { configureStore } from '@reduxjs/toolkit'


export function contactReducer(state = ['kartik'], action) {

    switch(action.type){
      case 'ALL_TYPE_CONTACTS':
        return [
            ...action.data
        ] 

      case 'US_ONLY_CONTACTS':
        return [
            ...action.data
        ] 
        

      case 'CLEAR':
        return [] 

      default:
        return state;
    }

  }

const store = configureStore({reducer:contactReducer})

export default store;