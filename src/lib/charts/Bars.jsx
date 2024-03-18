import React from 'react';
import Text from '../text/text';
import styles from './bars.module.css';
import { Popover } from 'antd';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} leftBar
 * @param {Object} rightBar
 * @param {Object} titles
 * @param {Object} infos
 * @param {String} blueLegend
 * @param {String} redLegend
 * @return {JSX.Element} The Bars Chart
 * @example
 * <ChartBars
 *   titles={{tf_page:"", tf_domain:"", refdom_page:"", refdom_domain:"", domain_rating:""}}
 *   infos={{tf_page:"", tf_domain:"", refdom_page:"", refdom_domain:"", domain_rating:""}}
 *   leftBar={{
 *      tf_page: "",
 *      tf_domain: "",
 *      refdom_page: "",
 *      refdom_domain: "",
 *      "domain-rating": ""
 *     }}
 *   leftLegend=""
 *   rightBar={{
 *      tf_page: "",
 *      tf_domain: "",
 *      refdom_page: "",
 *      refdom_domain: "",
 *      "domain-rating": ""
 *     }}
 *   rightLegend=""
 * />
 */
const Bars = ({
  titles,
  infos,
  leftBar,
  rightBar,
  rightLegend,
  leftLegend,
  localeInteger,
  ...props
}) => {
  return (
    <div className="flex-col gap-xl w-full" {...props}>
      <div className="flex-between-start gap-sm">
        <Bar
          title={titles.tf_page}
          leftBar={leftBar.tf_page}
          rightBar={rightBar.tf_page}
          barsInfo={infos.tf_page}
          localeInteger={localeInteger}
        />
        <Bar
          title={titles.tf_domain}
          leftBar={leftBar.tf_domain}
          rightBar={rightBar.tf_domain}
          barsInfo={infos.tf_domain}
          localeInteger={localeInteger}
        />
        <Bar
          title={titles.refdom_page}
          leftBar={leftBar.refdom_page}
          rightBar={rightBar.refdom_page}
          barsInfo={infos.refdom_page}
          localeInteger={localeInteger}
        />
        <Bar
          title={titles.refdom_domain}
          leftBar={leftBar.refdom_domain}
          rightBar={rightBar.refdom_domain}
          barsInfo={infos.refdom_domain}
          localeInteger={localeInteger}
        />
        <Bar
          title={titles.domain_rating}
          leftBar={leftBar['domain-rating']}
          rightBar={rightBar['domain-rating']}
          barsInfo={infos.domain_rating}
          localeInteger={localeInteger}
        />
      </div>
      <div className="flex-y-center gap-md">
        <div className="flex gap-sm">
          <div className={styles['legend-square-blue']}></div>
          <Text variant={'paragraph-tiny'} align={'center'}>
            {rightLegend}
          </Text>
        </div>
        <div className="flex gap-sm">
          <div className={styles['legend-square-red']} />
          <Text variant={'paragraph-tiny'} align={'center'}>
            {leftLegend}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Bars;
Bars.propTypes = {
  titles: PropTypes.object,
  infos: PropTypes.object,
  leftBar: PropTypes.object,
  rightBar: PropTypes.object,
  rightLegend: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  leftLegend: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const Bar = ({ title, rightBar, leftBar, barsInfo, localeInteger }) => {
  const adjustedrightBar =
    rightBar < leftBar ? (rightBar / leftBar) * 100 : 100;
  const adjustedleftBar = rightBar > leftBar ? (leftBar / rightBar) * 100 : 100;
  return (
    <div className="flex-col-center gap-base">
      <div className={`${styles['double-bar']} flex-y-end`}>
        <Popover content={localeInteger(rightBar)}>
          <div
            className={styles['blue-bar']}
            style={{ height: `${adjustedrightBar}%` }}
          />
        </Popover>
        <Popover content={localeInteger(leftBar)}>
          <div
            className={styles['red-bar']}
            style={{ height: `${adjustedleftBar}%` }}
          />
        </Popover>
      </div>
      <Popover
        placement="bottom"
        content={
          <Text variant={'paragraph-small'} className={styles['bars-popover']}>
            {barsInfo}
          </Text>
        }
      >
        <Text variant={'paragraph-tiny'} align={'center'}>
          {title}
        </Text>
      </Popover>
    </div>
  );
};

Bar.propTypes = {
  title: PropTypes.string,
  rightBar: PropTypes.number,
  leftBar: PropTypes.number,
  barsInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
