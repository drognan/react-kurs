import { useState } from 'react';

import Dropdown from "../components/Dropdown";

function DropdownPage() {

    const [selection, setSelection] = useState(null);

    var options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'}
    ]

    const handleSelect = (option) => {
        setSelection(option);
    };

    return (
        <div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelect} />    {/* selection = Controlled Component */} 
            <Dropdown options={options} value={selection} onChange={handleSelect} />    {/* selection = Controlled Component */} 
        </div>
    );

};

export default DropdownPage;