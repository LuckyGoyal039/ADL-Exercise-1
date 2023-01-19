// import './style.css'
// import './table.module.scss';
// import './tableStyle.css'
import './style.css';
const TableData = ({ data }) => {
    // const [data]=props
    return (

        <table className='table'>
            <thead className="table-heading">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Website</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d) => {
                    return (<tr key={d.id} className="table-row">
                        <td>{d.name}</td>
                        <td>{d.username}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                        <td>{d.website}</td>
                        <td>{d.address.street}{d.address.suite} {d.address.city} {d.address.zipcode} {d.address.geo.lat} {d.address.geo.lng}</td>
                        <td>{d.company.name } {d.company.catchPhrase} {d.company.bs}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}

export default TableData;