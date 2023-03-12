import { GoBell, GoDatabase, GoCheck } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {

    const handleClick = () => {}

    return (
        <div>
            <div>
                <Button rounded onClick={handleClick}>
                    <GoBell />
                    Primary
                </Button> 
            </div>
            <div>
                <Button primary>
                    <GoDatabase />
                    Secondary
                </Button> 
            </div>
            <div>
                <Button success>
                    Success
                </Button> 
            </div>
            <div>
                <Button warning outline>
                    Click me!
                </Button> 
            </div>
            <div>
                <Button danger rounded>
                    <GoCheck />
                    Click me!
                </Button> 
            </div>
        </div>
    );
};

export default ButtonPage;