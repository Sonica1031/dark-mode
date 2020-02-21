import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
function useDarkMode(){
    const [someValue, setSomeValue] = useLocalStorage('DarkMode');
}
useEffect(() => {
    if (useLocalStorage === true){
        const body = document.querySelector('body')
        body.classList.add('DarkMode');
    }
},[someValue])