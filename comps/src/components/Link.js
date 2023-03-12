import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-blue-500', 
        className,                                      // Nice 'override' av proppen className
        currentPath === to && activeClassName           // Lyxsyntax
    );     

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {           // Ctrl för att öppna i ny browsertab. Funkar för mittenklick också!
            return;
        }

        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;