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
        //删除数据
        async delTodo(id:number){

            await  request.delete(`/${id}`)
            this.getTodos()

        },
        //更新函数 根据id来更新
        async updateTodo(id:number,key:string,value:boolean | string){

            await request.patch(`/${id}`,{
                [key]:value,
            })
            
            this.getTodos()
             
        }





    }
})
export default mainStore