function Sidebar(props) {
  
  return (
    <div className="mt-3">
      <div className="col-md-12">
        <input
          type="text"
          className="form-control border border-1 border-dark"
          placeholder="Username"
          onChange={props.handleOnChange}
        />
      </div>
      <div className="col-md-12 mt-3">
        <button
          className="btn form-control bg-danger text-white"
          onClick={props.handleOnSubmit}
        >
          Search
        </button>
      </div>
      <table className="table table-striped table-hover table-bg-light text-center mt-5">
        <thead className="bg-dark text-white">
          <tr>
            <th>Profiles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className="btn bg-warning text-white" onClick={()=>props.Search('ajkharad')} >Ajinkya Kharad</button>     
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn bg-light text-white" onClick={()=>props.Search('mdo')}>Mark Otto</button>        
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn bg-sucess text-white" onClick={()=>props.Search('abhijeetvc')}>Abhijit Sir</button>      
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn bg-secondary text-white" onClick={()=>props.Search('Mark')}>Mark Josef</button>     
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </div>
  );
}
export default Sidebar;
