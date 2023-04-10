
import genres from '../data/genre'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

//because of user's experience . We dont want to load Genre adn Game at the same time
//we make a genre.ts to store a static data
//--> load genres from server ->> const useGenres = () => useData<Genre>('/genres');
//--> make a static Genres data by modifying the useGenres() and loading static data file
const useGenres = () => (
    { data: genres , isLoading: false, error: null }

);  


export default useGenres;