export const columns = [
	{
		title: "First Name",
		dataIndex: "firstName",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.firstName.localeCompare(b.firstName),
	},
	{
		title: "Last Name",
		dataIndex: "lastName",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.lastName.localeCompare(b.lastName),
	},
	{
		title: "Start Date",
		dataIndex: "startDate",
		defaultSortOrder: "ascend",
		sorter: (a, b) => new Date(a.startDate) - new Date(b.startDate),
	},
	{
		title: "Department",
		dataIndex: "department",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.department.localeCompare(b.department),
	},
	{
		title: "Date of Birth",
		dataIndex: "dateOfBirth",
		defaultSortOrder: "ascend",
		sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
	},
	{
		title: "Street",
		dataIndex: "street",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.street.localeCompare(b.street),
	},
	{
		title: "City",
		dataIndex: "city",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.city.localeCompare(b.city),
	},
	{
		title: "State",
		dataIndex: "state",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.state.localeCompare(b.state),
	},
	{
		title: "Zip Code",
		dataIndex: "zipCode",
		defaultSortOrder: "ascend",
		sorter: (a, b) => a.zipCode - b.zipCode,
	}
]