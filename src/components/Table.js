import React, { useState, useEffect } from "react"

const Table = () => {
	const [data, setData] = useState([])
	const [hasErrors, setErrors] = useState()

	useEffect(() => {
	   	fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
	      .then(res => res.json())
	      .then(res => setData(res))
	      .catch(err => this.setState(err))
		}
   )

	const renderData = () => {
		return (
			data.map(item => {
				return (
					<tbody>
						<tr>
							<td>
								{item.creditorName}
							</td>
							<td>
								{item.firstName}
							</td>
							<td>
								{item.lastName}
							</td>
							<td>
								{item.minPaymentPercentage}
							</td>
							<td>
								{item.balance}
							</td>
						</tr>
					</tbody>
				)
			})
		)
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Creditor</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Min Pay%</th>
					<th>Balance</th>
				</tr>
			</thead>
			{renderData()}
		</table>
	)
}

export default Table
