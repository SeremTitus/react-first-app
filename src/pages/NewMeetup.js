import { useNavigate } from "react-router-dom"; 
import NewMeetupForm from "../components/meetups/NewMeetupForm";
function NewMeetupPage() {
    const navigate =useNavigate()
    function onAddMeetupHandler(meetupdata){
        fetch(
            'https://react-first-app-48259-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupdata),
                Headers: {
                    'Content-Type':'application/json'
                }
            }            
            ).then(()=>{
                navigate("/", { replace: true });
            }

            );
    }
    return ( 
    <section>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup ={onAddMeetupHandler}/>
    </section>
    );
}

export default NewMeetupPage;