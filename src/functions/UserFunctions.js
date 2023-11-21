import axios from "axios";
import { urlAxiosUser} from './function';

// GET USER INFO
export function getUserInfo() {
    return fetch(urlAxiosUser)
      .then((res) => res.json())
      .then((res) => {
        console.log("alluser function",res)
        const alluser = res.records;
        return alluser;
      })
      .catch((error) => console.log(error));
  }