// import im from './sun.jpeg'
function Data(props) {
  return (
    <div>
      {/* <nav>
                <h1 className="p-2">Details</h1>
            </nav> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary border-0">
              <div className="card-header">
                <div style={{ height: 250 }} className="bg-white mt-1">
                  <img
                    src={props.Info.avatar_url}
                    alt="img"
                    className="h-100 w-100"
                  />
                </div>
              </div>
              <div className="card-body h5 text-white">
                Name : {props.Info.name}
                <hr />
                UserName : {props.Info.login}
                <hr />
                City : {props.Info.location}
                <hr />
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-sucess text-white">
                <h3>Details</h3>
              </div>
              <div className="card-body">
                Github_url : {props.Info.html_url}
                <hr />
                Company : {props.Info.company}
                <hr />
                Followers : {props.Info.followers}
                <hr />
                Blog : {props.Info.blog}
                <hr />
                Repos : {props.Info.public_repos}
                <hr />
                Bio : {props.Info.bio}
                <hr />
                <div className="col-md-6">
                  <button className="btn form-control btn-lg bg-warning text-white" >
                    View Repos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Data;
