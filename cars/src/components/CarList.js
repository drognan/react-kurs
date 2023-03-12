import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarSearch() {

    const dispatch = useDispatch();

    // Descructuring från en hierarkis
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm }}) => {

        // Derived state! direkt i selectorn!
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return {
            cars: filteredCars,
            name: form.name
        }
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {

        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel && ${bold && 'bold'}`}>
                <p>
                    {car.name} - {car.cost}
                </p>
                <button 
                    className='button is-danger'
                    onClick={() => handleCarDelete(car)}
                    >
                    
                    Delete
                </button>

            </div>
        )
    });


    return <div className="car-list">
          {renderedCars}
    </div>
}

export default CarSearch;