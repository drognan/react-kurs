import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from '../components/Panel';

function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();                                                 // Ett nytt referenselement, tilldelas i ett div-element nedan med ref={divEl}!

    useEffect(() => {
        const handler = (event) => {
            
            console.log("euu")
            
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        
        document.addEventListener('click', handler, true);                  // Registrera en ny eventlyssnare vid första rendering []

/*        document.addEventListener('click', handler, {
            capture: false,
            once: true                                                      // Tar bort eventet automatiskt! undersök vidare! 
        });
*/
        return () => document.removeEventListener('click', handler);        // RemoveEventListener ifall komponenten renderas om eller tas bort!
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);     // Här kommer vi få problem och bör egentligen använda en Functional State Update! (se nedan)
        //setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    const handleOptionClick = (option) => {
        setIsOpen(false);       // Stäng ...
        onChange(option);       // .. och skjut iväg data uppåt
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer-p1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>;
    });

    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>      {/* Egen komponent som wrappar lite styles, children och stoppar in className  */}
                {value?.label || 'Select...'}
                <GoChevronDown className='text-lg'/>
            </Panel>
            {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;