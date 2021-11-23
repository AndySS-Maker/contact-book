import React from "react";
 
class SearchContact extends React.Component {
  state = {
    input: "",
  };

  handleSearch = (event) => {
    const { value } = event.target;
    const { state, updataState } = this.props;
    const filteredData = state.allContacts.filter(contact => {
    const lowerName = contact.name.toLowerCase()
    const lowerValue = value.toLowerCase()
    const condition = lowerName.includes(lowerValue)
      return condition;
    })
    this.setState({input: value})
    if(value === ''){
     updataState(state.allContacts)  
    }
    updataState(filteredData)
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="search-input"
          onChange={this.handleSearch}
          placeholder="Search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default SearchContact;
