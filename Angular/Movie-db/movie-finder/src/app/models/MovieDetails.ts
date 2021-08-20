export interface MovieDetails {
    title: string,
    poster_path: string,
    release_date: string,
    genres: { name: string; }[],
    homepage: string;
}