import { AxiosRequestConfig } from "axios";

export const DEF_PAGE = 1;
export const MAX_PAGE = 10;
export const PARAMS = {
    '_limit': 10,
    '_page': DEF_PAGE
} as AxiosRequestConfig['params']

export const MSG__LOADING = '...loading';

export const DEFAULT_RESPONSE_STATE = {
  loading: true,
  loadingMsg: MSG__LOADING,
  error: undefined,
  data: undefined
}

export const MSG__ERROR = 'Something went wrong please refresh the page';

export const NEXT_LABEL_BTN = 'Next Page';
export const PREV_LABEL_BTN = 'Previous Page';