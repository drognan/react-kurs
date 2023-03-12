import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider( {children }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => setCurrentPath(window.location.pathname);     

        window.addEventListener('popstate', handler);

        return () => window.removeEventListener('popstate', handler);           // Cleanup function! Ta alltid bort eventlyssnaren vi registrerat! good practice
    }, []);

    const navigate = (to) => {
        // to = /accordion
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{ currentPath, navigate}}>  	    {/** Tillgängligör den här context för alla {children}, value = context */}
        {children}
    </NavigationContext.Provider>
}

export { NavigationProvider };

export default NavigationContext;
