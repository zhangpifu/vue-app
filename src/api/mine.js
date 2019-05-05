import request from '@/utils/request'

export function userLogin(params) {
  return request({
    url: '/login',
    method: 'get',
    params: params
  })
}
