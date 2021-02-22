import React, { Component } from "react";

interface Props {}
interface State {}
// eslint-disable-next-line import/prefer-default-export
export class BaseComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}
