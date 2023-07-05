import {useState , useEffect} from "react"

export const useFetch=(url, method="GET") => {
   const [data, setData]= useState(null)
   const [isPending, setIsPeding] = useState(false)  
   const [error , setError] = useState(null)
   const [details,setDetails] = useState(null)
   
   const postData=(postData)=>{
      setDetails({
        method:{
            "Content-Type":"application/json"
        }
      })
   }
}