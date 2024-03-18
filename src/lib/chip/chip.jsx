import React, { useEffect, useRef, useState } from 'react';
import Text from '../text/text';
import Badge from '../badge/badge';
import { IconChevronRight, IconInfo } from '../icons';
import { Popover, Radio, Space } from 'antd';
import styles from './chip.module.css';

export const MemberChip = ({ imgSrc, name, staff, status }) => {
  return (
    <div className={'team-member-chip'}>
      <div className="chip-img">
        <img src={imgSrc} alt={`${name}`} />
      </div>
      <div className="chip-info">
        <Text variant={'heading-5'}>{name}</Text>
        <Text variant={'paragraph-tiny'}>{staff}</Text>
      </div>
      {status === 'active' && (
        <Badge variant="green" text="Active" className={'ship-badge'} />
      )}
      {status === 'pending' && (
        <Badge
          variant="yellow"
          text="Pending invitation"
          className={'ship-badge'}
        />
      )}
      {status === 'inactive' && (
        <Badge variant="red" text="Inactive" className={'ship-badge'} />
      )}
    </div>
  );
};

export const WorkspaceChip = ({ title, subtitle, img, ...props }) => {
  return (
    <button className="workspace-chip flex-between-center" {...props}>
      <div className="workspace-chip-content flex-y-center">
        {/*<img src={img} alt="" />*/}
        <div className="flex-col-start">
          <Text variant={'heading-4'} align={'left'}>
            {title}
          </Text>
          <Text variant={'paragraph-tiny'} align={'left'}>
            {subtitle}
          </Text>
        </div>
      </div>
      <span className={'p-xs'}>
        <IconChevronRight size={12} />
      </span>
    </button>
  );
};

export const ToolChip = ({
  imgSrc,
  active,
  onChangeHandle,
  popoverContent,
  isClickable,
  status,
  disabled,
  icon,
  name,
  headline,
  options = [],
  onClick,
}) => {
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState(active);

  const handleBlurMenu = (event) => {
    if (
      menuRef.current &&
      menuButtonRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setOpenMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleBlurMenu);
    return () => {
      document.removeEventListener('click', handleBlurMenu);
    };
  }, []);

  const onChange = (optionValue) => {
    setValue(optionValue);
    onChangeHandle(optionValue);
    setOpenMenu(false);
  };

  return (
    <div className="flex-y-center gap-sm">
      <button
        className={`flex-y-center gap-sm ${!onClick && 'cursor-default'}`}
        onClick={onClick}
      >
        <span
          className={`flex-center ${styles['tool-chip-image']}`}
          style={{ backgroundImage: imgSrc }}
        >
          {icon}
        </span>
        <div className="text-left">
          <Text variant={'heading-4'}>{name}</Text>
          <Text variant={'paragraph-tiny'} className={'color-gray-dark'}>
            {headline}
          </Text>
        </div>
      </button>

      <div className="relative ml-auto">
        {isClickable ? (
          <button
            onClick={() => setOpenMenu(!openMenu)}
            disabled={disabled}
            ref={menuButtonRef}
          >
            <Badge
              variant={disabled ? 'grey' : active ? 'green' : 'blue-light'}
              text={status}
              size={'large'}
            />
          </button>
        ) : (
          <Popover content={disabled && popoverContent}>
            <Badge
              variant={disabled ? 'grey' : active ? 'green' : 'blue-light'}
              text={status}
              size={'large'}
            />
          </Popover>
        )}
        {openMenu && (
          <div
            className="absolute bg-white-shadow rounded-sm p-base my-xs"
            style={{ zIndex: 555 }}
            ref={menuRef}
          >
            <Radio.Group value={value}>
              <Space direction="vertical">
                {options?.map((option, index) => (
                  <Radio
                    name={'status'}
                    key={index}
                    value={option.value}
                    onChange={() => onChange(option.value)}
                  >
                    {option.label}
                  </Radio>
                ))}
              </Space>
            </Radio.Group>
          </div>
        )}
      </div>
    </div>
  );
};

export const TeamMemberChip = ({ name, staff, image, status }) => (
  <Popover
    placement="top"
    content={name.length > 30 ? name : ''}
    trigger="hover"
  >
    <div
      className={`${styles['team-member-chip']} p-md rounded-md flex-y-center gap-sm`}
    >
      <div className={styles['member-image']}>
        <img src={image} alt={name} />
        {status && <span className={styles[`status-dot-${status}`]}></span>}
      </div>
      <div className="flex-col gap-xs">
        <Text variant={'heading-3'} className={styles['text-team']}>
          {name}
        </Text>
        <Text variant={'paragraph-small'}>{staff}</Text>
      </div>
    </div>
  </Popover>
);
