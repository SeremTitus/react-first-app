import {useRef} from 'react';
import Card from '../ui/Card.js';
import classes from './NewMeetupForm.module.css';
function NewMeetupForm(props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function onSubmitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage= imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupdata = {
            title : enteredTitle,
            image : enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }
        props.onAddMeetup(meetupdata)
    }
    return(
        <Card>
            <form className ={classes.form} onSubmit={onSubmitHandler}>
                <div className = {classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>
                <div className = {classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef}/>
                </div>
                <div className = {classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' ref={addressInputRef}/>
                </div>
                <div className = {classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows='5' required id='description' ref={descriptionInputRef}></textarea>
                </div>
                <div className= {classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;