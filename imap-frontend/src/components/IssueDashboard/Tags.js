import React from "react";
import "./Tags.css";
import ReactTags from "react-tag-autocomplete";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: props.update,
      tags: [],
      suggestions: props.suggestions,
    };
    this.reactTags = React.createRef();
  }

  onDelete(i) {
    const tags_ = this.state.tags.slice(0);
    tags_.splice(i, 1);
    this.setState({ tags: tags_ });

    this.state.update(tags_);
  }

  onAddition(tag) {
    const tags_ = [].concat(this.state.tags, tag);
    this.setState({ tags: tags_ });
    console.log(tags_, "child");
    this.state.update(tags_);
  }

  render() {
    return (
      <ReactTags
        ref={this.reactTags}
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        noSuggestionsText="No matching tags"
        onDelete={this.onDelete.bind(this)}
        onAddition={this.onAddition.bind(this)}
      />
    );
  }
}

export default Tags;
