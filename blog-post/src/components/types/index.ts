export type { TPost} from './postsTypes';
export type { TComment} from './postDetailsTypes';
export type TResponse<TData> = {
  loading: boolean,
  error?: string,
  data?: TData,
  loadingMsg: string,
}