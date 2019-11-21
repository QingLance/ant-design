import * as React from 'react';
import { ProgressProps, ProgressSize } from './progress';

interface StepsProps extends ProgressProps {
  steps: number;
  size?: ProgressSize;
}

const Steps: React.SFC<StepsProps> = props => {
  const getStyledSteps = () => {
    const { size = 'default', steps, percent = 0, strokeWidth = 8, strokeColor, prefixCls } = props;
    const current = Math.floor(steps * (percent / 100));
    const stepWidth = size === 'small' ? 2 : 14;
    const styleSteps = [];
    for (let i = 0; i < steps; i++) {
      let color = strokeColor;
      if (i > current - 1) {
        color = '#f3f3f3';
      }
      const stepStyle = {
        backgroundColor: `${color}`,
        width: `${stepWidth}px`,
        height: `${strokeWidth}px`,
      };
      styleSteps.push(<div key={i} className={`${prefixCls}-steps-item`} style={stepStyle} />);
    }
    return styleSteps;
  };
  const { prefixCls, children } = props;
  return (
    <div className={`${prefixCls}-steps-outer`}>
      {getStyledSteps()}
      {children}
    </div>
  );
};

export default Steps;
