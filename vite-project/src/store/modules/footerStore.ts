import {defineStore} from 'pinia'
const footerStore=defineStore("footer",{
    state:()=>{

        return {
          tab:['All','Active','Completed'],
          active:'All',
        }
    },
    
    
})
export default footerStore