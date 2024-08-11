import {styled} from "@linaria/react";

import {type PropsWithChildren, useState} from "react";




const Button = styled.button<{ color:string ,theme:{primaryColor:string}}>`
    color: ${(props)=>props.color};
    position: relative;
    background: ${(props)=>props.theme.primaryColor};
`

const ReactApplication: React.FC<PropsWithChildren> = ({children}) => {

    const [counter, setCounter] = useState(0);

    const handleUpdateCounter =()=>{
        setCounter(counter + 1)
    }

    return ( <Button theme={{primaryColor:'red'}} color={`rgb(${counter * 20},${counter * 10},${counter * 5})`} onClick={handleUpdateCounter} >{
        children
    }</Button>)
}

export default ReactApplication
