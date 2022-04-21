import { useParams } from "react-router-dom"

export const Agaram=()=>
{
   
    
    return(
        <>
        <h1>World Best Education</h1>
        </>
    )
}
export const Thenali=()=>
{
    return(
        <>
        <h1>World Best Literature</h1>
        </>
    )
}
export const Vikatan=()=>
{
    const {gopi}=useParams()
    return(
        <>
        <h1>Assembly poet from vijayanagar emperium{gopi}</h1>
        </>
    )
}