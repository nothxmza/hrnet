import { states } from "./data/states";
import { Modal } from "./Modal";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { createEmployer } from "./redux/employerSlice";
import { Form, Input, Button } from 'antd';



export const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const formRef = useRef(null);
	const [employer, setEmployer] = useState({
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		startDate: "",
		street: "",		
		city: "",
		state: "",
		zipCode: "",
		department: ""
	});

	const dispatch = useDispatch()
	const employerData = useSelector((state) => state.employers.employers);
	console.log(employerData);


	const handleSave = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
		let size = Object.values(data).filter((value) =>  value === "")
		if(size.length > 0){
			return alert("Please fill all fields");
		}
		dispatch(createEmployer(data));
		setIsOpen(true);
	}
	const handleClose = () => {
		setIsOpen(false);
	}




	const onFinish = (value) => {
		console.log('Success:', value);
	}

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}




	  return (
	<>
	<div className="title">
			<h1>HRnet</h1>
		</div>
		<div className="container">
			<a href="employee-list.html">View Current Employees</a>
			<h2>Create Employee</h2>
			{/* <form ref={formRef} id="create-employee">
				<label htmlFor="first-name">First Name</label>
				<input type="text" id="first-name" name="firstName" />

				<label htmlFor="last-name">Last Name</label>
				<input type="text" id="last-name" name="lastName" />

				<label htmlFor="date-of-birth">Date of Birth</label>
				<input id="date-of-birth" type="text" name="dateOfBirth" />

				<label htmlFor="start-date">Start Date</label>
				<input id="start-date" type="text" name="startDate" />

				<fieldset className="address">
				<legend>Address</legend>

				<label htmlFor="street">Street</label>
				<input id="street" type="text" name="street" />

				<label htmlFor="city">City</label>
				<input id="city" type="text" name="city" />

				<label htmlFor="state">State</label>
				<select name="state" id="state">
				{states.map((state) => (
					<option key={state.abbreviation} value={state.abbreviation}>
						{state.name}
					</option>
				))}
				</select>

				<label htmlFor="zip-code">Zip Code</label>
				<input id="zip-code" type="number" name="zipCode" />
				</fieldset>

				<label htmlFor="department">Department</label>
				<select name="department" id="department">
				<option>Sales</option>
				<option>Marketing</option>
				<option>Engineering</option>
				<option>Human Resources</option>
				<option>Legal</option>
				</select>
			</form> */}

			<Form
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
     			 	<Input />
    			</Form.Item>
<Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
			</Form>
			<button onClick={handleSave}>Save</button>
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