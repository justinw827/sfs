import React, { useState, useEffect } from "react"
import TableRow from "./TableRow.js"

const Table = () => {
	const [data, setData] = useState([])
	const [hasErrors, setErrors] = useState()
	const [idCount, setIdCount] = useState(0)
	const [checkCount, setCheckCount] = useState(0)

	useEffect(() => {
	   	fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
	      .then(res => res.json())
	      .then(res => setData(res))
	      .catch(err => setErrors(err))
	}, [])

	const handleCheck = (event) => {
		if (event.target.checked) {
			setCheckCount(checkCount+1)
		} else {
			setCheckCount(checkCount-1)
		}
	}

	const renderData = () => {
		return (
			<tbody>
				{data.map(item => <TableRow key={item.id} item={item} handleCheck={handleCheck}/>)}
			</tbody>
		)
	}

	const handleAddDebt = (event) => {
		let tempData = data;
		const newData = {
			id: idCount + 1,
			creditorName: "Test",
			firstName: "Test",
			lastName: "Test",
			minPaymentPercentage: 2,
			balance: 100
		}
		tempData.push(newData)
		setData([...tempData])
		setIdCount(idCount + 1)
	}

	const getTotalBalance = () => {
		let total = 0;
		let checkboxes = document.getElementsByName("checkboxes")
		for (let i = 0; i < checkboxes.length; i++) {
			if (checkboxes[i].checked) {
				total += parseFloat(checkboxes[i].parentElement.parentElement.children[5].innerText)
			}
		}

		return total.toFixed(2);
	}

	const handleAllCheck = (event) => {
		let checkboxes = document.getElementsByName("checkboxes");
		if (event.target.checked) {
			let value = false;
			if (checkCount < data.length) value = true;
			for(let i = 0; i < checkboxes.length; i++) {
				checkboxes[i].checked = value;
			}
			if (value) {
				setCheckCount(data.length)
			} else {
				setCheckCount(0)
			}
		} else {
			for(let i = 0; i < checkboxes.length; i++) {
				checkboxes[i].checked = false;
			}
			setCheckCount(0)
		}
	}

	const handleRemoveDebt = (event) => {
		let tempData = data
		tempData.pop()
		setData([...tempData])
	}

	return (
		<table>
			<thead>
				<tr>
					<th><input type="checkbox" onClick={event => handleAllCheck(event)}/></th>
					<th className="table-header">Creditor</th>
					<th className="table-header">First Name</th>
					<th className="table-header">Last Name</th>
					<th className="table-header">Min Pay%</th>
					<th className="table-header">Balance</th>
				</tr>
			</thead>
			{renderData()}
			<tbody>
				<tr>
					<td><button onClick={event => handleAddDebt(event)} className="button-debt">Add Debt</button></td>
					<td><button onClick={event => handleRemoveDebt(event)} className="button-debt">Remove Debt</button></td>
				</tr>
				<tr style={{background: "#7FC5FF"}}>
					<td className="balance">Total</td>
					<td colSpan={5} className="balance">$ {getTotalBalance()}</td>
				</tr>
				<tr>
					<td colSpan={2}>Total Row Count : {data.length}</td>
					<td colSpan={3}>Check Row Count : {checkCount}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Table
