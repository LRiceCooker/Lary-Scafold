import { AxiosResponse } from 'axios'

type HttpClientResponseType = Promise<void | AxiosResponse<any>>;

export default HttpClientResponseType