import {defineStore} from "pinia"
import request from "../../utils/request"
import {ITodoItem} from "../../types/data.d"
const mainStore =defineStore("main",{
    state:()=>{
        return {

            list:[] as ITodoItem[],
            
        }
    },
    actions:{
        //拿到数据
        async getTodos(){

            const {data}=await request.get<ITodoItem[]>("/")
            // console.log(data)
            this.list=data
        

        },




    }
})
export default mainStore