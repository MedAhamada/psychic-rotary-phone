import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './card.module.css';
import Badge from '../badge/badge';
import { IconCalendar, IconChartSimple } from '../icons';

/**
 *
 * @param title
 * @param date
 * @param status - active | inactive | unavailable
 * @param description
 * @param icon
 * @param image
 * @param statusText
 * @param image
 * @param link
 * @param analyses
 * @param {*} props
 */
const ToolCard = ({
  status,
  title,
  statusText,
  description,
  date,
  analyses,
  image,
  ...props
}) => {
  const renderFooter = () => {
    if (status === 'unavailable') return null;
    return (
      <div className={'flex gap-md w-full'}>
        <p className={styles['tool-card-footer-text']}>
          <IconCalendar size={16} />
          {status === 'active' && (
            <Text variant={'paragraph-small'}>{date}</Text>
          )}
        </p>
        <p className={styles['tool-card-footer-text']}>
          <IconChartSimple size={16} />
          {status === 'active' && (
            <Text variant={'paragraph-small'}>{analyses}</Text>
          )}
        </p>
      </div>
    );
  };

  const content = (
    <>
      <div className={styles['tool-card-image']}>
        <img src={image} width="100%" height="100%" alt={description} />
        {status !== 'active' && <div className="image-overlay"></div>}
        <Badge
          variant={
            (status === 'active' && 'green') ||
            (status === 'unavailable' && 'grey') ||
            (status === 'inactive' && 'blue-light')
          }
          size="large"
          text={statusText}
          className={styles['tool-card-badge']}
        />
      </div>
      <div className={styles['tool-card-header']}>
        <img src={title} alt="title card" width="100%" height="100%" />
      </div>
      <Text
        variant={'paragraph-small'}
        align={'left'}
        className={styles['tool-card-description']}
      >
        {description}
      </Text>
      {renderFooter()}
    </>
  );

  const renderButton = () => (
    <button
      {...{
        ...props,
        className: `${styles['tool-card-container-disabled']} cursor-default`,
      }}
    >
      {content}
    </button>
  );

  const renderLink = () => (
    <a {...{ ...props, className: styles['tool-card-container'] }}>
      {content}
    </a>
  );
  return status === 'active' ? renderLink() : renderButton();
};

ToolCard.propTypes = {
  status: PropTypes.oneOf(['active', 'inactive', 'unavailable']),
  title: PropTypes.string,
};

export default ToolCard;
