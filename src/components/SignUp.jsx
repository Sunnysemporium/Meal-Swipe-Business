// React signup component with role selection
import React, { useState } from 'react';

const SignUp = () => {
    const [role, setRole] = useState('');

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Select Role:
                <select value={role} onChange={handleRoleChange}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                </select>
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;