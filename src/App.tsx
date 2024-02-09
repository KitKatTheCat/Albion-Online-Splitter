import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar border-body" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./src/assets/pics/GOURMET_GUILD_LOGO.png" alt="Bootstrap" width="75" height="75"></img>
            <span className="fw-bold">Albion Online Splitter</span>
          </a>
        </div>
      </nav>

      <div className="text-bg-warning p-3">
        <div className="content">
          <div className="split">
            <table className="table table-striped table-hover table-bordered border-light">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Name</th>
                  <th scope="col">Loot Split</th>
                  <th scope="col">-%</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-warning">
                  <th scope="row">KitKat the Cat</th>
                  <td>1000000</td>
                  <td>5</td>
                  <div data-bs-theme="dark">
                    <button type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="splitter">
            <table className="table table-striped table-hover table-bordered border-light">
              <thead>
                <tr className="table-warning">
                  <th scope="col">Total Loot</th>
                  <th scope="col">Repair Cost</th>
                  <th scope="col">Splitter Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-warning">
                  <th scope="row">1000000</th>
                  <td>0</td>
                  <td>0</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="Inputs">
          <div className="Inputs-split">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">Name</span>
              <input type="text" className="form-control" placeholder="IGN" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">-%</span>
              <input type="text" className="form-control" placeholder="Pecentage loss" aria-label="-%" aria-describedby="addon-wrapping"/>
            </div>
          </div>

          <div className="Inputs-total">
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">Total Loots</span>
              <input type="text" className="form-control" placeholder="Total Loots" aria-label="totalLoots" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">Repair Cost</span>
              <input type="text" className="form-control" placeholder="Repair Cost" aria-label="repairCost" aria-describedby="addon-wrapping"/>
            </div>
            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping">Splitter Fee</span>
              <input type="text" className="form-control" placeholder="% Splitter Fee" aria-label="splitterFee" aria-describedby="addon-wrapping"/>
            </div>
          </div>
        </div>

        <div className="made">
            <p>The Albion Online Splitter is a website created solely for the purpose of helping other people splitting their loots to each other. Made by KitKat the Cat. All rights reserved. </p>
          </div>
      </div>
      
    </>
  )
}

export default App
