import { useState } from "react";
import axios from "axios";


const API_KEY = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNjc2NDM5MjI0LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjYwODg3MjI0fQ.X6EnuvO5j5n9WLNrQUyJ9M4ABtDQpfsrjfWnts3GmPs `


export function requestContacts(stateFn,USOnly = false,query){

       const apiURL = `https://api.dev.pastorsline.com/api/contacts.json?companyId=171&page=1${USOnly ? '&countryId=226' : ''}${query ? `&query=${query}` : ''}`
       axios.get(apiURL,{
        headers:{
          'Authorization':API_KEY 
        }
      })
      .then(response => {
        stateFn(Object.values(response.data.contacts))
    });

}



function UseContactApi(){
      const [contactsList, setContacts] = useState([{'name':'All Type!'}]) 

      const setAllContacts = () => {
         requestContacts(setContacts,false);
      };


      const setSearchContacts = (query) => {
         requestContacts(setContacts,false,query);
      };

      const setUSContacts = () => {
         requestContacts(setContacts,true);
      };

      const clearContacts = () => setContacts([])



   return [contactsList,setAllContacts,setUSContacts,setSearchContacts,clearContacts];

}


export default UseContactApi;