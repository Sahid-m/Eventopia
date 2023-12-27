import PropTypes from 'prop-types'

export default function Admin(props) {

    Admin.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        username: PropTypes.string
    }

  return (
    <div className="home-bg">
      <h1>Hello {props.name} , Youre email is {props.email} and Your username is {props.username}</h1>
    </div>
  )
}
