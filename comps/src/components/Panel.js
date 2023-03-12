import classNames from 'classnames';

// Mycket händer här! className mergas med classNames (externt lib) ...rest sätts på div'en children är allt som hamnar i elementet. T.ex. våra ikoner
function Panel({ children, className,  ...rest }) {

    const classes = classNames(
        'border rounded p-3 shadow bg-white w-full', 
        className);

    return (
        <div className={classes} {...rest}>
            { children }
        </div>
    );
}

export default Panel;