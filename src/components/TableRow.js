import React from "react"

const TableRow = (props) => {
	return (
		<tr>
			<td style={{textAlign: "center", width: "10%"}}>
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
			<td className="table-cell" style={{textAlign: "right", width: "9%"}}>
				{props.item.minPaymentPercentage.toFixed(2)}%
			</td>
			<td className="table-cell" id="balance-col">
				{props.item.balance.toFixed(2)}
			</td>
		</tr>
	)
}

export default TableRow
