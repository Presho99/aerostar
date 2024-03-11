import React from "react";
import "../components/Receipts.css";
import one from "../assets/one.webp";

const Receipts: React.FC = () => {
  return (
    <div className="receipts">
      <div className="receipt-title">
        <h3>Last Trips</h3>
        <p>Overview of recent activities</p>
      </div>
      <div className="receipt-table">
        <table>
          <thead>
            <tr>
              <th>Members</th>
              <th>Flight</th>
              <th>Total Members</th>
              <th>Ticket Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="member-profile above">
                <img src={one} />
                <div className="member-name">
                  <p className="main-name">Precious Omondi</p>
                  <p className="small-name">preshomondi@gmail.com</p>
                </div>
              </td>
              <td className="above">Qatar</td>
              <td className="member-box above">
                <div className="member-circle">
                  <p>5</p>
                </div>
              </td>
              <td className="above">65k</td>
            </tr>
            <tr>
              <td className="member-profile">
                <img src={one} />
                <div className="member-name">
                  <p className="main-name">Precious Omondi</p>
                  <p className="small-name">preshomondi@gmail.com</p>
                </div>
              </td>
              <td>France</td>
              <td className="member-box">
                <div className="member-circle">
                  <p>5</p>
                </div>
              </td>
              <td>33k</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipts;
