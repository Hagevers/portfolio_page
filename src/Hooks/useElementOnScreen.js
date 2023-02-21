import {useState, useMemo, useEffect } from 'react';

const useElementOnScreen = (options, element) => {
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    }

    const optionsMemo = useMemo(() => {
        return options
    }, [options]);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = element.current;
        if(currentTarget) observer.observe(currentTarget);

        return () => {
            if(currentTarget) observer.unobserve(currentTarget);
        }
    }, [element, optionsMemo]);

    return isVisible
}

export default useElementOnScreen;

