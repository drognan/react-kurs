import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

import produce from 'immer';        // En funktion som wrappar vår reducer

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'set_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';


// OBS!!! KOLLA KOMMITTEN INNAN DEN HÄR!!
// Den här ligger utaför komponenten!
/*const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            };
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: state.count + action.payload                    
            };

        case DECREMENT_COUNT:
              return {
                ...state,
                count: state.count - 1
            };
        
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,                                                       // Alltid bra att kopiera över objektet om man i framtiden lägger till fler props i initieringsobjektet!
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }

        default:
            throw new Error('Unexpected action type: ' + action.type);          // vad är bäst här? antingen kasta fel eller returnera state?
            //return state;
    }
*/

// Normal reducer ovan

// Immer förenklad nedan

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1       // Immer magic! mutable state. Behöver inte returnera ett värde. Måste returnera på default
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return;
        default:
            return;

            //throw new Error('Unexpected action type: ' + action.type);          // vad är bäst här? antingen kasta fel eller returnera state?
            //return state;
    }

    // Här måste vi kolla vad som ska uppdateras. 
    // Ska count eller valueToAdd uppdateras?
    // Detta löses med ett action-objekt innehållandes typ av action och eventuell payload
/*    if (action.type === INCREMENT_COUNT) {
        return {
            ...state,
            count: state.count + 1
        };
    }

    if (action.type === SET_VALUE_TO_ADD) {
        return {
            ...state,
            valueToAdd: state.count + action.payload                    
        };
    }

    // Returnera ALLTID ett värde! 
    return state;*/
}


function CounterPage({ initialCount }) {
 
//    const [ count, setCount ] = useState(initialCount);
    //const [ valueToAdd, setValueToAdd ] = useState(0);

    const [state, dispatch] = useReducer(produce(reducer), {             // Metoden defineras ovan (utanför komponenten)        // Wrappar vår reducer och låter oss mutera objekt
        count: initialCount,
        valueToAdd: 0
    })

    console.log(state);                                         // Kolla på hela state!

    const increment = () => {
        //setCount(count + 1);      // useState
        
        dispatch({
            type: INCREMENT_COUNT,                              // Det här är någon form av community best practice! Ett vanligt objekt som innehåller typ och payload
        });                
    }

    const decrement = () => {
        //setCount(count - 1);

        dispatch({
            type: DECREMENT_COUNT,                              // Det här är någon form av community best practice! Ett vanligt objekt som innehåller typ och payload
        });                
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;       // String parseInt returnerar NaN om det icke är ett nummer. T.ex. tom sträng.. eller exponentiella värden 'e' så vi kan hantera det med ||
        //setValueToAdd(value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value                                      // Ett sämre sätt här är att göra uträkningen och skicka med den som en payload. 
                                                                // Låt reducern hantera state-förändringar! Vad händer om flera vi har flera event som 
                                                                // vill göra samma sak, men någon av funktionerna är felskrivna + istället för - 
                                                                // Kod-duplicering!
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //setCount(count + valueToAdd);
        //setValueToAdd(0);

        // Alltid ett action-objekt!
        dispatch({
            type: ADD_VALUE_TO_COUNT
        });
    };

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input 
                    value={state.valueToAdd || ""} 
                    onChange={handleChange} 
                    type="number" 
                    className="p-1 m-3 bg-gray-50 border border-gray-300" 
                    />
                <Button>Add it</Button>
            </form>

        </Panel>
    )

}

export default CounterPage;