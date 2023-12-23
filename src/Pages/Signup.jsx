


export default function Signup() {

    const formData = new FormData();


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const isTokenalr = localStorage.getItem('authToken');


        if (isTokenalr) {
            alert("already Logged In");
            return;
        }

    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Bypass-Tunnel-Reminder': "anything"
        },
        body: formData,
      });

      if (!response.ok) {
          const errmessage = await response.json();
          console.log(errmessage);
          throw new Error(errmessage.message || 'API request failed');
      } else {
          const data = await response.json();
          alert(data.message);
          if (data.token) {
              localStorage.setItem('authToken', data.token);
              alert("You're good to go! No need to login again for 24hours");
          }
      }

      // Handle successful API response, if needed
    } catch (error) {
      // Handle errors
        alert(`Error: ${error.message}`);
        console.error('Error:', error);
        
    }
  };
    
    const handleChange = (event) => {
    const { name, value } = event.target;
    formData.set(name, value);
  };

    return (
      
    

    <div className="home-bg">
          <form className="form-signup">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input onChange={handleChange} type="text" className="form-control" name="name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input onChange={handleChange} type="text" className="form-control" name="username" required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onChange={handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input  type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label  className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              
                <button type="submit" onClick={handleSubmit} className="btn btn-green">Signup</button>
         </form>
    </div>
  )
}
