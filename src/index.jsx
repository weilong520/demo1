import React from 'react';
import ReactDOM from 'react-dom/client';
import TestCom from './views/testCom'

class Count extends React.Component {
    state={ num: 0};
    render() {
        let {num} = this.state;
       return <>
        <span>{num}</span>
        <button onClick={() => {
            num ++;
            this.setState({num})
        }}>change</button>
        </>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Count/>
    <TestCom title="hdjsakdha" />
    </>
);

