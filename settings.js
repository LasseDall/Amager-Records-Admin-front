export const API_URL = "https://amager-records.azurewebsites.net/api"

export const FETCH_NO_API_ERROR = " (Is the API online or did the endpoint exists ?)"


let headers = new Headers()

headers.set("Authorization","Bearer "+localStorage.getItem("token"))

export function getHeaders(){
    return headers;
}