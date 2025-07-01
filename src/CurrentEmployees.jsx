import { Table } from "antd"
import { columns } from "./Columns"
import { useSelector } from "react-redux"
import { Link } from "react-router";
import { adaptDataForTab } from "./utils/adaptDataForTab";

export const CurrentEmployees = () => {
	const data = useSelector((state) => state.employers.employers);

	return(
		<>
		<Link to="/">Back to Home</Link>
		<Table columns={columns} dataSource={adaptDataForTab(data)} pagination={{ current: 1, total: 100}}/>
		</>
	)
}