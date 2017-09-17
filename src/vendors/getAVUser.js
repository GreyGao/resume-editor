import AV from '../vendors/leanCloud'

export default function (user) {
  var {id, attributes: {username}} = user || AV.User.current() || {attributes: {}}
  return {id, username}
}
