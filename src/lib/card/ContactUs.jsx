import React from 'react';
import iceMountain from '../../assets/images/ice-mountain.webp';
import Text from '../text/text';
import Button from '../button/button';
import { IconEmail } from '../icons';

const ContactUs = () => {
  return (
    <div
      className={'contract-help-card flex-center'}
      style={{ background: `url(${iceMountain})` }}
    >
      <div className={'flex-col-center gap-sm'}>
        <Text variant={'heading-3'}>Besoin d'aide ?</Text>
        <Button
          variant={'primary'}
          text={'Contactez-nous'}
          icon={<IconEmail />}
          onClick={() => alert('Contact me')}
        />
      </div>
    </div>
  );
};

export default ContactUs;
