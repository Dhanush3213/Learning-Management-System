
export default function Login() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-6 offset-3'>
            <div className='card'>
                <div className='card-header'>Login</div>
                <div className='card-body'>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"/>
                   
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
