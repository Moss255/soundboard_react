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
        onChange={this.handleChange} className='form-control-lg form-control'>
                <option value='Karl'> Karl </option>
                <option value='Harry'> Harry </option>
                <option value='Matt'> Matt </option>
                <option value='Elliott'> Elliott </option>
                <option value='Other'> Other </option>
                <option value='Random'> Random </option>
             </select>
    }


}

export default DropDown;

