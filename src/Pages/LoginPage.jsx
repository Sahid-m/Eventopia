export default function LoginPage({handleLogin}) {

    const formData = new FormData();

    const handleSubmit = async(event) => {
         event.preventDefault();
        
        const isTokenalr = localStorage.getItem('authToken');


        if (isTokenalr) {
            alert("already Logged In");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/login',
                {
                    method: 'POST',
                    headers: { 'Bypass-Tunnel-Reminder': "anything" },
                    body: formData
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
                    handleLogin();
                    alert("You've Successfully Logged in and no need to login again for next 24h")
                }
            }
            
            
        } catch (e) {
            alert(`Error: ${e.message}`);
        }
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        formData.set(name,value)
    };



  return (
    <div className="home-bg">
          <form className="form-signup">
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <input onChange={handleChange} type="text" className="form-control" name="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" required />
                </div>
              
                <button type="submit" onClick={handleSubmit} className="btn btn-green">Login</button>
         </form>
    </div>
  )
}
