import React from "react"

const TableRow = (props) => {
	return (
		<tr>
			<td style={{textAlign: "center"}}>
				<input type="checkbox" name="checkboxes" onClick={event => props.handleCheck(event)}/>
			</td>
			<td className="table-cell">
				{props.item.creditorName}
			</td>
			<td className="table-cell">
				{props.item.firstName}
			</td>
			<td className="table-cell">
				{props.item.lastName}
			</td>
			<td className="table-cell">
				{props.item.minPaymentPercentage.toFixed(2)}%
			</td>
			<td className="table-cell">
				{props.item.balance.toFixed(2)}
			</td>
		</tr>
	)
}

export default TableRow
