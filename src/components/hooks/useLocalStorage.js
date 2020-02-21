import React from 'react';
import { useState} from 'react';

export function useLocalStorage(){
const [key, initialValue] = localStorage('name', 'Stephanie');
const [storedValue, setStoredValue] = useState(() => {
const item = window.localStorage.getItem(key);
return item ? JSON.parse(item) : initialValue;
})
const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
}
return [storedValue];
}