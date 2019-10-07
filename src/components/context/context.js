

import React from 'react';

export const MyContext = React.createContext();

class ContextProvider extends React.Component {

    state = { age: 29}

    render(){
        return(
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default ContextProvider;