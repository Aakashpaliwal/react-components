import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// import "./progress.module.scss";
import styles from "./index.module.css";
import Styled from "styled-components";
import cx from "classnames";

export class Progress extends PureComponent {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    const { percentage, onCompleteHandler } = this.props;
    if (percentage === 100) {
      onCompleteHandler();
    }
  }

  render() {
    const _class = cx(
      this.props.className,
      styles.progress,
      styles[this.props.size]
    );

    const _style = {
      ...(this.props.color && {
        backgroundColor: this.props.color,
      }),
      width: `${this.props.percentage < 100 ? this.props.percentage : 100}%`,
    };

    return (
      <div className={_class} style={{ marginTop: 20 }}>
        <div style={_style} className={styles.progress_bar}></div>
        {this.props.children}
      </div>
    );
  }
}

export default Progress;
