import { Button } from 'components/Button/Button';
import { SecondTitle } from '../SecondTitle/SecondTitle';
import { StatisticsList } from './StatisticsList';
import React from 'react';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  handlerBtnGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        visible: true,
      };
    });
  };

  handlerBtnNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        visible: true,
      };
    });
  };

  handlerBtnBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        visible: true,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let percent = Math.ceil((good * 100) / total);
    return percent;
  };

  render() {
    return (
      <div>
        <Button
          btn1={'Good'}
          btn2={'Neutral'}
          btn3={'Bad'}
          good={this.handlerBtnGood}
          neutral={this.handlerBtnNeutral}
          bad={this.handlerBtnBad}
        />
        <SecondTitle text={'Statistics'} />
        {this.state.visible ? (
          <StatisticsList
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ):("There is no feedback")}
      </div>
    );
  }
}

export default Statistics;
