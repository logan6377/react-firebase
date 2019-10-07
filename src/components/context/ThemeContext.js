import React, {createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextWrapper extends React.Component{
    state={
        bgcolor:'#fcc',
        fontcolor:'#fff'
    }
    toggleColor = () =>{
        console.log('aa')
        this.setState({bgcolor:"#f00"})
    }
    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleChange:this.toggleColor}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextWrapper;