import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
})

 
class JsonPlaceholder {

  async getPosts<TData>(config: AxiosRequestConfig ) {
    return axiosInstance.get<TData>('posts', {...config}).then((res) => res.data);
  }

  async updatePost<D>(postId: number, data: D) {
    return axiosInstance.patch<any, any, D>(`postId/${postId}`, data);
  }

  async deletePost(postId: number) {
    return axiosInstance.delete(`postId/${postId}`);
  }

  async getCommentByPostId<TData>(postId: number, config?: AxiosRequestConfig) {
    return axiosInstance.get<TData>(`comments`, {
      params: {
        postId,
      },
      ...config
    });
  }
}
export const jsonPlaceholder = new JsonPlaceholder();
