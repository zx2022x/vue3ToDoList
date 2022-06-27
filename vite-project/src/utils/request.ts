import axios from "axios"
const request=axios.create({
    baseURL:" http://localhost:3000/todos",

})
export default request
