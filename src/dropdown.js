import React from 'react';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.props.updateSelectedCategory(e.target.value)
    }
    render() {
        return <select
        onChange={this.handleChange} className='input-group input-group-lg selector'>
                <option value='Karl'> Karl </option>
                <option value='Harry'> Harry </option>
                <option value='Matt'> Matt </option>
                <option value='Elliott'> Elliott </option>
                <option value='Fart'> Fart </option>
                <option value='Random'> Random </option>
                <option value='Laugh'> Laugh </option>
             </select>
    }


}

export default DropDown;

