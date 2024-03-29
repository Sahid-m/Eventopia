
import { useEffect, useState } from "react";
import Admin from "../Components/Admin";
import api_url from "../Components/url";

export default function AdminPage() {

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [logged, setLogged] = useState(false);


  const auth = async () => {

    let endpoint = "/auth";
    try {

      let authTokenf = localStorage.getItem("authToken");
      
      const response = await fetch(api_url + endpoint, {
        method: 'GET', headers: {
          Authorization: authTokenf,
        },
      })

      if (!response.ok) {
        throw new Error("Fetching Error! Please Reload")
      }

      const data = await response.json();

      if (data.message != "ok") {
        throw new Error("Token Not Valid. Please Login Again")
      }

      setUsername(data.username);
      setEmail(data.email);
      setName(data.name);
      

    } catch (e) {
      setErr(e)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    let authTokenf = localStorage.getItem("authToken");
    if (!authTokenf) { setLogged(false) }
    else {
      setLogged(true)
    }
    auth()
  }, [])


  return (
    <div className="pagemargin">
      {!logged ? (<h1 className="home-bg">Please Login, Youre not Logged in </h1>)
        : 
        loading ? (<h1 className="home-bg">Loading...</h1>)
        :
        err ? (
        <h1 className="home-bg"> Error: {err.message} </h1>
      ) : (
          <Admin name={name} email={email} username={username}/>
      )}
    </div>
  )
}
