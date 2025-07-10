import { states } from "../data/states";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createEmployer } from "../redux/employerSlice";
import { Select, DatePicker } from 'antd';
import { Link } from "react-router";
import dayjs from 'dayjs';
import { Modal } from "modal-component-openclass-p14"
import "modal-component-openclass-p14/dist/index.css";


export const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef(null);
	const [state, setState] = useState("AL")
	const [department, setDepartment] = useState("Sales");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [startDate, setStartDate] = useState("");

	const dispatch = useDispatch()
	const employerData = useSelector((state) => state.employers.employers);
	console.log(employerData);


	const handleSave = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		data.dateOfBirth = dateOfBirth;
		data.startDate = startDate;
		data.state = state;
		data.department = department;
		console.log(data);
		let size = Object.values(data).filter((value) =>  value === "")
		if(size.length > 0){
			return alert("Please fill all fields");
		}
		dispatch(createEmployer(data));
		setIsOpen(true);
		formRef.current.reset();
		setState("AL");
		setDepartment("Sales");
		setDateOfBirth("");
		setStartDate("");
	}
	const handleClose = () => {
		setIsOpen(false);
	}

	  return (
	<>
	<div className="title">
			<h1>HRnet</h1>
		</div>
		<div className="container">
			<Link to="/employees-list" style={{marginBottom: 5}}>View Current Employees</Link>
			<h2>Create Employee</h2>
			<form ref={formRef} id="create-employee">
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" name="firstName" />

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" name="lastName" />

				<label htmlFor="date-of-birth">Date of Birth</label>
				<DatePicker id="date-of-birth"  value={dateOfBirth ? dayjs(dateOfBirth,"YYYY-MM-DD") : null} onChange={(date, dateString) => setDateOfBirth(dateString)} />

				<label htmlFor="start-date">Start Date</label>
				 <DatePicker id="start-date" value={startDate ? dayjs(startDate,"YYYY-MM-DD") : null} onChange={(date, dateString) => setStartDate(dateString) } />

				<fieldset className="address">
				<legend>Address</legend>

				<label htmlFor="street">Street</label>
				<input id="street" type="text" name="street" />

				<label htmlFor="city">City</label>
				<input id="city" type="text" name="city" />

				<label htmlFor="state">State</label>
				<Select id="state" name="state" value={state} onChange={(value) => setState(value)} style={{width: 200}}>
					{states.map((state) => (
						<Select.Option key={state.abbreviation} value={state.abbreviation}>
							{state.name}
						</Select.Option>
					))}
				</Select>

				<label htmlFor="zip-code">Zip Code</label>
				<input id="zip-code" type="number" name="zipCode" pattern="[0-9]*" />
				</fieldset>

				<label htmlFor="department">Department</label>
				<Select id="department" name="department" value={department} onChange={(value) => setDepartment(value)} style={{width: 200}}>
					<Select.Option value="Sales">Sales</Select.Option>
					<Select.Option value="Marketing">Marketing</Select.Option>
					<Select.Option value="Engineering">Engineering</Select.Option>
					<Select.Option value="Human Resources">Human Resources</Select.Option>
					<Select.Option value="Legal">Legal</Select.Option>
				</Select>
			</form>
			<button onClick={handleSave} style={{marginTop: 20}}>Save</button>
		</div>
		<Modal
			open={isOpen}
			onClose={handleClose}
		>
			Employee Created!
		</Modal>
	</>
  );
}