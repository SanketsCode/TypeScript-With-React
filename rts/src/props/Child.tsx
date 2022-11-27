import  React from 'react';

interface ChildProps {
    color :string;
    onClick: () => void;
    children : React.ReactNode;
}

export const Child = ({color,onClick,children}: ChildProps) => {
    return <div>
        {color}
        <button onClick={onClick}>Click Me</button>
        </div>
}

export const ChildAsFC : React.FC<ChildProps> = ({color,onClick,children}) => {
    return <div>{color}
    <button onClick={onClick}>Click Me</button>
    {children}
    </div>
}