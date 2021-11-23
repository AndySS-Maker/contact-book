import React from "react";
class SearchContact extends React.Component {
  state = {
    input: "",
  };

  componentDidUpdate(prevState) {
    if (this.state.input !== prevState.input) {
      this.props.filterContact(this.state.input);
    }
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      input: value,
    });
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
