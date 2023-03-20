import { createContext,useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites:0,
    addFavorite : (favoriteMeetup) => {},
    removeFavoriteHandler:(meetupId) => {},
    itemIsFavoriteHandler:(MeetupId) =>{}

});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup){
        setUserFavorites((prevUserFavorites) =>{
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupId){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetupId) => meetup.id !== meetupId);
        });

    }
    function itemIsFavoriteHandler(MeetupId){
        return userFavorites.some((meetup )=> meetup.id == meetupId);
    }



    const context = {
        favorites : userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler,

    };

    return (
        <FavoritesContext.Provider value={ context }>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
