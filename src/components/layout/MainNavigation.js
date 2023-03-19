import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <header className={classes.header}>
            <div className={classes.logo}> React Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/all-meetups'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;