import ProfileCard from "./ProfileCard";        // Ingen extension på javascript-filer

import 'bulma/css/bulma.css'                    // Inget variabelnamn när vi bara laddar filen
import AlexaImage from './images/alexa.png';    // file-extensions på
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);     // alexa.png is less than 9.7kb, gets inlined
console.log(SiriImage);      // siri.png is more than 9.7kb, gets treated as s separate file

function App() {
    return (
        <div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} description="Alexa was created by Amazon and helps you buy things"></ProfileCard>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} description="Cortana was made by Microsoft. Who knows what it does?"></ProfileCard>
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} description="Siri was mabe by Apple and is being phased out"></ProfileCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;