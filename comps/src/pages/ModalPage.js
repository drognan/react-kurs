import { useState } from 'react';

import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage() {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };


    const actionBar = 
    <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>

    const modal = 
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>;

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum, orci at blandit tincidunt, magna felis tristique velit, vitae gravida nisi nunc quis lectus. Nullam in velit justo. Nulla a feugiat metus, vel ornare est. Donec suscipit diam lobortis magna elementum dignissim. Integer lobortis, urna sit amet congue auctor, ante libero tempus nisi, et condimentum odio felis in leo. Integer tincidunt, neque eu feugiat tempor, quam arcu sodales nulla, quis luctus urna sapien id lorem. Suspendisse fringilla, metus eu pharetra ultricies, dui magna elementum ante, ornare commodo lectus justo non dolor. Nunc et dapibus lorem.
            </p>
        </div>
    );
}


export default ModalPage;