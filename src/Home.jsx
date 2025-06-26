import { states } from "./data/states";
import { Modal } from "./Modal";
import { useState } from "react";


export const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleSave = () => {
		setIsOpen(true);
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
            <a href="employee-list.html">View Current Employees</a>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
						{states.map((state) => (
							<option key={state.abbreviation} value={state.abbreviation}>
								{state.name}
							</option>
						))}
					</select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button onClick={handleSave}>Save</button>
        </div>
		<Modal
			open={isOpen}
			onClose={handleClose}
		>
			Employee Created!
		</Modal>
        {/* <div id="confirmation" class="modal">Employee Created!</div> */}
	</>
  );
}