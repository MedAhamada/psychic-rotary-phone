import React from 'react';
import PropTypes from 'prop-types';
import Text from '../text/text';
import styles from './card.module.css';
import Button from '../button/button';
import { IconLink, IconPin, IconPinFilled, IconPlus } from '../icons';
import DropdownActions from '../dropdown/dropdownActions';
/**
 *
 * @param title
 * @param date
 * @param pinned
 * @param editLink
 * @param copyLink
 * @param redirectToLink
 * @param linkIcon
 * @param bgCard
 * @param {*} props
 * @param {*} type - default | empty | template
 */
export const Card = ({
  type,
  title,
  date,
  pinned,
  copyLink,
  redirectToLink,
  linkIcon,
  bgCard,
  options,
  openOptionsMenu,
  onOptionsMenuChange,
  onCloseOptionsMenu,
  bgColor,
  emptyTitle,
  ...props
}) => {
  if (type === 'empty') {
    return (
      <button className={`${styles['empty-card']}`} {...props}>
        <div className={styles['empty-card-hover']}>
          <Text variant={'heading-2'}>{emptyTitle}</Text>
          <div className={styles['empty-card-icon']}>
            <IconPlus />
          </div>
        </div>
      </button>
    );
  }

  if (type === 'template') {
    return (
      <div className={`${styles['card-link-template-container']}`}>
        <button className={styles['card-link-template-header']} {...props}>
          <div className={styles['empty-card-icon']}>
            <IconPlus />
          </div>
        </button>
        <div className={styles['card-link-control']}>
          <div className={styles['card-link-info']}>
            <Text variant={'heading-4'}>{title}</Text>
          </div>
          <DropdownActions
            options={options}
            open={openOptionsMenu}
            onOpenChange={onOptionsMenuChange}
            onClose={onCloseOptionsMenu}
          />
        </div>
      </div>
    );
  }

  const PinIcon = () =>
    pinned ? (
      <span className={styles['card-link-pin-filled']}>
        <IconPinFilled size={16} />
      </span>
    ) : (
      <span>
        <IconPin size={16} />
      </span>
    );

  return (
    <div className={styles['card-link-container']}>
      <span
        className={`cursor-pointer ${styles['card-link-header']} ${styles['no-repeat-center-cover']}`}
        style={{
          backgroundImage: `url(${bgCard})`,
          backgroundColor: `var(--${bgColor}-light)`,
        }}
        role="button"
        onClick={redirectToLink}
      >
        <div className={styles['card-link-header-icon']}>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              copyLink();
            }}
            variant={'icon'}
            icon={<IconLink size={16} />}
          />
          {/* <Button variant="icon" icon={<PinIcon />} /> */}
        </div>
      </span>
      <div className={styles['card-link-control']}>
        <div className={'flex-y-center'}>
          {linkIcon && (
            <div className={`flex-center ${styles['card-link-icon']}`}>
              {linkIcon}
            </div>
          )}
          <div className={styles['card-link-info']}>
            <Text variant={'heading-4'}>{title}</Text>
            {/* <Text variant={'paragraph-tiny'}>{date}</Text> */}
          </div>
        </div>
        <DropdownActions
          options={options}
          open={openOptionsMenu}
          onOpenChange={onOptionsMenuChange}
          onClose={onCloseOptionsMenu}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['default', 'empty', 'template']),
  title: PropTypes.string,
  // date: PropTypes.string.isRequired,
  pinned: PropTypes.bool,
};

export default Card;

export { default as ContactUs } from './ContactUs';
export { default as FinanceOverview } from './FinanceOverview';
export { default as ToolCard } from './ToolCard';
