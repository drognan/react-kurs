import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

import { useState } from "react";

function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result);
    }

    // När vi ändrar state med setImages så renderas komponenten om!
    // ... och när komponenten renderas om renderas ALLA barn också om!!!!!
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images}/>
        </div>
    );
}

export default App;