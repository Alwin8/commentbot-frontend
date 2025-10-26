interface Props{
    list:{title:string,logo:string}[]
    onSelect:(id:Number)=>void
}
function navBar(props:Props){
    const listElements=props.list
    const checkMobile = window.innerWidth<800
    const handleSelect=(event:React.MouseEvent)=>{
        console.log("ji")
        const clickedItem=event.target as HTMLLIElement
        const listItem=clickedItem.closest("li")
        const items = document.querySelectorAll('.sidebar-item');
    items.forEach((item) => {
      item.classList.remove('active');
    });
        listItem?.classList.add('active')
        const id = listItem?.id ?? "0"
        props.onSelect(Number(id))
    }
   return (
    <ul className='list-group list-group-action mt-4 px-2 rounded align-items-center sidebar' style={{height:'80vh',minWidth:'15vw'}}  >
        {listElements.map((menu,index)=>(
            <li className={index==0 ? 'list-group-item list-group-item-action m-1 sidebar-item active align-items-center' :'list-group-item list-group-item-action m-1 sidebar-item index align-items-center'} id={index.toString()} key={index} onClick={(event:React.MouseEvent)=>handleSelect(event)}>
                <img src={menu.logo} className="logo"></img>
                <div className={checkMobile? 'd-none' : 'd-block'}>{menu.title}</div>
                </li>
   ))
        }
    </ul>
   )
}
export default navBar;