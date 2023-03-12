import { 
    useFetchAlbumsQuery, 
    useAddAlbumMutation
} from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {

    const { data, error, isFetching } = useFetchAlbumsQuery(user);      // Behöver inte köras i en useEffect, körs automatiskt första anropet
    const [addAlbum, results] = useAddAlbumMutation();

    //const result = useFetchAlbumsQuery(user);      // Vi får en hel hög saker här i våra anrop. Och tre utskrifter! Komponenten renderas tre gånger, men vi laddar bara data en gång

    //console.log(data, error, isLoading);
    //console.log(result);
    
    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (isFetching) {
        content = <Skeleton className="h-10 w-full" times={3} />
    } else if (error) {
        content = <div>Error loading albums.</div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItem key={album.id} album={album} />;
        });
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center items-center justify-between">
                <h3 className="text-lg font-bold">Albums for {user.name}</h3>
                <Button onClick={handleAddAlbum} loading={results.isLoading}>
                    + Add Album
                </Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
};

export default AlbumsList;
