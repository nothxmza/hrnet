import { useEffect, useState } from "react"
import { Table } from "antd"
import { columns } from "../components/Columns"
import { useSelector } from "react-redux"
import { Link } from "react-router";
import { adaptDataForTab } from "../utils/adaptDataForTab";

export const CurrentEmployees = () => {
	const [dataTab, setDataTab] = useState([]);
	const data = useSelector((state) => state.employers.employers);

	const handleSearchData = (e) => {
		const searchValue = e.target.value.toLowerCase();
		const filteredData = data.filter((item) => {
			return (
				item.firstName.toLowerCase().includes(searchValue) || item.lastName.toLowerCase().includes(searchValue) ||
				item.department.toLowerCase().includes(searchValue) || item.city.toLowerCase().includes(searchValue) ||
				item.state.toLowerCase().includes(searchValue) || item.street.toLowerCase().includes(searchValue) ||
				item.zipCode.toString().includes(searchValue) || item.dateOfBirth.toLowerCase().includes(searchValue) ||
				item.startDate.toLowerCase().includes(searchValue)
			);
		});
		setDataTab(filteredData);
	}

	useEffect(() => {
		setDataTab(data);
	}, [data]);

	return(
		<>
			<h1>Current Employees</h1>
			<Link to="/">Back to Home</Link>
			<div style={{display: "flex", alignItems: "center", gap: 5}}>
				<label htmlFor="search">Search</label>
				<input type="text" onChange={handleSearchData} style={{width: 100}}/>
			</div>
			<Table columns={columns} dataSource={adaptDataForTab(dataTab)} pagination={{showSizeChanger: true}}/>
		</>
	)
}