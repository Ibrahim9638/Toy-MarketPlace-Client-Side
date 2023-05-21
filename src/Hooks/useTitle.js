import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `EduToy | ${title}`

    },[title])
}
export default useTitle;