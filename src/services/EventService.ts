import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/18076038408/vue-events-db',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

export default {
  // 分页获取事件列表
  getEvents(perPage: number, page: number) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  // 获取单个事件详情
  getEvent(id: number) {
    return apiClient.get(`/events/${id}`)
  },
  // 更新事件
  updateEvent(id: number, event: any) {
    return apiClient.put(`/events/${id}`, event)
  }
}