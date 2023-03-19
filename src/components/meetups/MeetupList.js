import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

function MeetupList(props){
    return (
        <ul className={classes.list}>
            { props.meetups.map((meetups) =>(
                <MeetupItem
                    key = {meetups.id}
                    id = {meetups.id}
                    image = {meetups.image}
                    title = {meetups.title}
                    address = {meetups.address}
                    description = {meetups.description}
                />

            ))}
        </ul>

    );
}
export default MeetupList;