import { Component } from "react";

class SearchBox extends Component {
    render() {
        const { onSearchChange } = this.props;
        return (
            <input
                className="search-box"
                type="search"
                placeholder="Search monsters"
                onChange={onSearchChange}
            />
        );
    }
}

export default SearchBox;
