import React from "react";

class Search extends React.Component {

state = {term: ''}

OnChange = (event)=>{
  //console.log(event.target.value);
  this.setState({term: event.target.value});
  //this.props.onChange(this.state.term)
}

onSubmit = (event)=>{
    event.preventDefault();
    this.props.onChange(this.state.term)
}
 

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <div className="field">
              <label>Search</label>
              <input
                type="text"
                onChange={this.OnChange}
                name="query"
                value={this.state.term}
                placeholder="Search YouTube Videos..."
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
