import platform from "../data/platform";

interface Platform {
    id: number;
    name: string;
    slug: string;
}
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () => (
    { data: platform, isLoading: false, error: null }
);

export default usePlatforms;