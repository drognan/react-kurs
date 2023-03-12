import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {

    const [expandedIndex, setExpandedIndex] = useState(-1);     // Ingen accordion är öppen by default (index = -1)

    // 4) Lite onödigt krångligt att läsa den här i en map (onliner att föredra?). Flytta ovanför/utanför
    const handleClick = (index) => {
/*        if (expandedIndex === index) {            // Delayed State Update (React uppdaterar så småningom)
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }*/

        // Functional State Update
        setExpandedIndex((currentValue) => {
            if (currentValue === index) {
                return -1;
            }

            return index;
        });
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        // 3) Lite onödigt krångligt att läsa den här i en map (onliner att föredra?). Flytta ovanför/utanför
//        const handleClick = () => {
//            setExpandedIndex(index);
//        }

        const icon = <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                {/* 2) */}
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>

                {/* 1) <div onClick={() => setExpandedIndex(index)}>{item.label}</div>      När vi kapar just det här elementet skapas en NY pil-funktion (anonym funktion) med parameter index. För nästa objekt skapas en ny pil-funktion med index +1. Två olika pil-funktioner alltså! För tre Items skapas tre event handlers med olika parametrar!*/}
                
                
                {isExpanded && <div className='borde-b p-5'>{item.content}</div>}           {/* Conditional rendering. Javascript specialare truty1 && truty2 = truthy2 (returnerar första falsy eller sista truty value)*/}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>

};

export default Accordion;