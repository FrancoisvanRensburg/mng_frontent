import React from 'react';
import PropTypes from 'prop-types';

import {
  Submit,
  Comment,
  Cancel,
  DetailOutline,
  SubmitSml,
  WaffleButton,
  WaffleRow,
} from './Styles';

export const SubmitButton = ({ text }) => {
  return <Submit>{text}</Submit>;
};

SubmitButton.propTypes = {
  text: PropTypes.string,
};

export const SubmitButtonSm = ({ text }) => {
  return <SubmitSml>{text}</SubmitSml>;
};

SubmitButtonSm.propTypes = {
  text: PropTypes.string,
};

export const CommentButton = () => {
  return <Comment>comment</Comment>;
};

export const CancelButton = () => {
  return <Cancel>cancel</Cancel>;
};

export const DetailButton = () => {
  return (
    <DetailOutline>
      <div />
      <div />
      <div />
    </DetailOutline>
  );
};

export const Waffle = () => {
  return (
    <WaffleButton>
      <WaffleRow>
        <div />
        <div />
        <div />
      </WaffleRow>
      <WaffleRow>
        <div />
        <div />
        <div />
      </WaffleRow>
      <WaffleRow>
        <div />
        <div />
        <div />
      </WaffleRow>
    </WaffleButton>
  );
};
