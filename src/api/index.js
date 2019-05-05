import request from '@/utils/request'

export function index_data(data) {
  return request({
    url: '/femaleNameApi',
    method: 'post',
    data: data
  })
}
