import React, {ReactNode} from 'react';
import Nav from "./components/nav";
import "materialize-css";
import './App.css';

interface IProps {
    children: ReactNode
}


function App(props: IProps) {
    return (
        <>
            {/*<Nav/>*/}
            {props.children}
        </>
    );
};

export default App;
