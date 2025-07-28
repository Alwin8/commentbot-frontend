import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props{
    list:string[]
    onSelect:(id:Number)=>void
}
function navBar(props:Props){
    const listElements=props.list
    const handleSelect=(event:React.MouseEvent)=>{
        const tag=event.target as HTMLLIElement
        const items = document.querySelectorAll('.sidebar-item');
    items.forEach((item) => {
      item.classList.remove('active');
    });
        tag.classList.add('active')
        const id = tag.id ?? "0"
        props.onSelect(Number(id))
    }
   return (
    <ul className='list-group list-group-action mt-4 px-2 rounded align-items-center' style={{backgroundColor:'lightblue',height:'80vh'}} onClick={(event:React.MouseEvent)=>handleSelect(event)} >
        {listElements.map((menu,index)=>(
            <li className={index==0 ? 'list-group-item list-group-item-action m-1 sidebar-item active' :'list-group-item list-group-item-action m-1 sidebar-item index'} id={index.toString()} key={index}>{menu}</li>
   ))
        }
    </ul>
   )
}
export default navBar;