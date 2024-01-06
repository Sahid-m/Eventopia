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

      <div className="container h-80">
        <div className="row h-full">
          <div className="col-md-5 col-sm-12 ">
            <div className='admin-head'><h3 className='admin-nav-head fs-1'>Hello {props.username}</h3>
            <div className=''><a className='btn admin-nav-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" > Add New </a></div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12">
              <div className='YPost' ><YourPosts /></div>
          </div>
      </div>
        <div><AddPostsModal /></div></div>
      
        
      
    </div>
  )
}
