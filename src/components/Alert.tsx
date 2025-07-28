
interface Props{
    message:String
    onClose:()=>void
    style?: React.CSSProperties;
}
function Alert(props:Props){
    return (
  <div className="alert alert-dismissible fade show bg-light" role="alert" id="alert" style={props.style}>
    {props.message}
    <button type="button" className="btn-close" onClick={()=>props.onClose()}></button>
  </div>
    )
}
export default Alert