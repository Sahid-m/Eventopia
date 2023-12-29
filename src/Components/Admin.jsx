import PropTypes from 'prop-types'
import AddPostsModal from './AddPostsModal'
import YourPosts from './YourPosts'

export default function Admin(props) {

    Admin.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        username: PropTypes.string
  }
  
  

  

  return (
    <div className="pagemargin">
      <div className='admin-nav'><h3 className='admin-nav-head fs-1'>Hello {props.username}</h3>
        <div className=''><a className='btn admin-nav-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" > Add New </a></div>
      </div>
        <div><AddPostsModal /></div>
        
      <div className='' ><YourPosts /></div>
    </div>
  )
}
