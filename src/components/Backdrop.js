function Backdrop(props){
    function cancleHandler(){
        props.onCancel();
    }
    return(
        <div className="backdrop" onClick ={cancleHandler}/>
    );
}
export default Backdrop;