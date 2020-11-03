import axios from 'axios'
import { toast } from 'react-toastify'

const options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

const URL = 'http://dev.rapptrlabs.com/Tests/scripts'

export const newsletterSubscription = (values, cb) => {
  axios({
    method: 'post',
    url: `${URL}/add-email.php`,
    data: values,
  })
    .then(() => {
      toast.success('Added email Successful!', options)

      cb('')
    })
    .catch(() => {
      toast.error('Error while Adding email!', options)
    })
}

export const loginSubmit = (values, cb) => {
  axios({
    method: 'post',
    url: `${URL}/user-login.php`,
    data: values,
  })
    .then(() => {
      toast.success('Login Successful!', options)

      cb()
    })
    .catch(() => {
      toast.error('Error while login!', options)
    })
}

export const signUpSubmit = (values, cb) => {
  axios({
    method: 'post',
    url: `${URL}/user-signup.php`,
    data: values,
  })
    .then(() => {
      toast.success('Signup Successful!', options)

      cb()
    })
    .catch(() => {
      toast.error('Error while Signup!', options)
    })
}
