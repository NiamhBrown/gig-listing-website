const FavouriteButton = (props) => {

    const handleClick = () => {
        props.setFavouriteStatus(!props.favouriteStatus)
        console.log(props.favouriteStatus)
    }

    return (
        <div>
            <button className="favourite-btn" onClick={ handleClick }>{props.favouriteStatus ? 'Unfavourite' : 'Favourite'}</button>
        </div>
    )

}

export default FavouriteButton;