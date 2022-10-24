import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="sidebar">
        <h1>Cypress Practice</h1>
        <nav>
          <ul>
            <li>
              <Link to={`resume`}>Simple text verification</Link>
            </li>
            <li>
              <Link to={`live-coding`}>Tests with API data</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="detail">
        <Outlet />
      </div>

    </>
  );
}