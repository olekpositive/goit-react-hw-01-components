import React from 'react';
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

import { Container } from './FriendList-styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </Container>
  );
};


FriendList.protTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnlone: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};