import { useState,useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
function AllMeetupsPage() {
  const [isloading,setIsLoading] = useState(true);
  const [loadedMeetups,setLoadedMeetups] = useState([]);
  useEffect(() =>{
      fetch(
      'https://react-first-app-48259-default-rtdb.firebaseio.com/meetups.json'            
      ).then((response) =>{
          return response.json();
      }).then((data) =>{
          const meetups = [];
          for (const key in data){
            const meetup = {
              id:key,
              ...data[key]
            };
            meetups.push(meetup)
          }
          setIsLoading(false);
          setLoadedMeetups(meetups);
      });  
    },[]);
    if (isloading){
      return(
        <section>
          <p>Loading...</p>
        </section>
      );
    }
    return ( 
    < section>
        <h1>All Meetups</h1> 
        <MeetupList meetups = {loadedMeetups} />        
    </section>
    );
}

export default AllMeetupsPage;