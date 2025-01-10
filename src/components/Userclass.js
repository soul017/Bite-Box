import React from "react";
class userclass extends React.Component {
  // Passing props in class based component
  constructor(props) {
    super(props);
    // Creating state or local variable in class based component
    this.state = {
      userInfo: {
        name: "Dummy",
        loginid: "Default",
      },
    };
  }
  // Used for API calls
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/soul017");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>NAME: {name}</h2>
        <h3>LOGIN ID: {login}</h3>
      </div>
    );
  }
}

export default userclass;
