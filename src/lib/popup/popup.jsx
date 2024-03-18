import React from 'react';
import Button from '../button/button';
import Text from '../text/text';
import styles from './popup.module.css';
import { Modal } from 'antd';

/**
 * @param  {boolean}   icon        - SVG icon
 * @param  {string}    title       - title
 * @param  {string}    details     - details
 */
export const PopupRed = ({
  open,
  onClose,
  title,
  details,
  icon,
  onConfirm,
  onCancel,
  cancel,
  confirm,
  ...props
}) => {
  return (
    <Modal
      open={open}
      closable={false}
      footer={null}
      style={{ padding: '0' }}
      className={'modal-red-popup'}
      width={'fit-content'}
      centered={true}
      {...props}
    >
      <div className={styles['popup-container']}>
        <div className={styles['popup-icon']}>{icon}</div>

        <div className={styles['popup-info']}>
          <Text variant="heading-5" align="center">
            {title}
          </Text>
          <Text variant="paragraph-small" align="center">
            {details}
          </Text>
        </div>

        <div className={styles['popup-buttons']}>
          <Button
            text={cancel}
            variant="secondary"
            width="full"
            onClick={onClose}
            data-testid="popup-cancel-button"
          />
          <Button
            text={confirm}
            variant="danger"
            width="full"
            onClick={onConfirm}
            data-testid="popup-confirm-button"
          />
        </div>
      </div>
    </Modal>
  );
};
export default PopupRed;
