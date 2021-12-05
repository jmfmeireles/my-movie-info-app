export interface MoviesDetailsState {
  isCallingAPI: boolean;
  movieDetailedData?: any;
}

export interface MovieDetailedData {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  awards: string;
  directorList: CastMemberInfo[];
  writerList: CastMemberInfo[];
  directors: string;
  writers: string;
  starList: CastMemberInfo[];
  actorList: Actor[];
  genreList: KeyValuePair[];
  imDbRating: string;
  imDbRatingVotes: string;
  trailer: Trailer;
}

export interface CastMemberInfo {
  id: string;
  name: string;
}

export interface Actor {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface Trailer {
  thumbnailUrl: string | null;
  link: string | null;
  linkEmbed: string | null;
  errorMessage: string;
}

export interface GetMovieDetailsPayload {
  movieNumber: string;
  languageCode: string;
}

export interface KeyValuePair {
  key: string;
  value: string;
}
