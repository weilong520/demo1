import React from "react";

class TestCom extends React.Component {
  static defaultProps = {
    title: '11111331',
    num: 2
  }
  constructor(props) {
    super(props);
      (this.state = {
        title: "",
        num: 0
      });
  }
  render() {
    let { title, num } = this.state;
    return (
      <>
        <h1>{title}</h1>
        <p>{num}</p>
        <button
          onClick={() => {
            this.setState({
              num: ++num,
            });
          }}
        >
          change
        </button>
      </>
    );
  }
  componentDidMount() {
    this.setState({
        title: this.props.title,
        num: this.props.num
    })
  }
  
}
export default TestCom;
