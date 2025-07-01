export const adaptDataForTab = (data) => {
  return data.map((item, i) => {
	return {
	  firstName: item.firstName,
	  lastName: item.lastName,
	  startDate: item.startDate,
	  department: item.department,
	  dateOfBirth: item.dateOfBirth,
	  street: item.street,
	  city: item.city,
	  state: item.state,
	  zipCode: item.zipCode,
	  key: i
	};
  });
}