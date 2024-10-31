import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollManager = () => {
    const location = useLocation();

    useEffect(() => {
        const savedPosition = sessionStorage.getItem(location.pathname);
        if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
        }

        return () => {
            sessionStorage.setItem(location.pathname, window.scrollY.toString());
        };
    }, [location]);
};

export default useScrollManager;
