import React from 'react'
import '../components/Receipts.css'

const Receipts: React.FC = () => {
  return (
    <div className='receipts'>
        <div className='receipt-title'>
            <h3>Last Trips</h3>
            <p>Overview of recent activities</p>
        </div>
        <div className='receipt-table'>
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
                        <td>
                            John
                        </td>
                        <td>Qatar</td>
                        <td>3</td>
                        <td>65k</td>
                    </tr>
                    <tr>
                        <td>Jane</td>
                        <td>France</td>
                        <td>5</td>
                        <td>33k</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Receipts