
// deconstructing i argument list
function ProfileCard({ title, handle, image, description }) {
    
//    const { title, handle } = props;      // Javascript deconstructing
    
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is1by1">
                    <img src={image} alt="pda logo"></img>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                    
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    ); 
}

export default ProfileCard;