import Cookies from "js-cookie"

const clientToken = () => {
  const token = Cookies.get('token')
  
  if (token === undefined) {
    return null
  } else {
    return token
  }  
}

export default clientToken