const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false
    };
  }

  render() {
    if (this.state.liked) {
      return "you liked it!";
    }

    return (
      <button onClick={this.setState({ liked: true })}>Like button!</button>
    );
  }
}

const root = document.querySelector("#my-awesome-root");
ReactDOM.render(e(LikeButton), root);
