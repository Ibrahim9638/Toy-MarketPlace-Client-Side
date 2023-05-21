import { useEffect } from "react"

const useTitle = title=>{
    useEffect(()=>{
        document.title = `${title}- EduToys`
    },[title])
}
export default useTitle;