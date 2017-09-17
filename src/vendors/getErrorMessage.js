const map = {
  202: '用户名已被占用',
  217: '无效的用户名',
  211: '找不到该用户',
  210: '用户名和密码不匹配',
  unknown: '请求失败，请稍候再试'
}
export default function ({code}) {
  return map[code] || map.unknown
}
