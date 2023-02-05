
import { ListItem, Name, Online, Offline } from './FriendListItem-styled';


export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <span>{isOnline ? <Online /> : <Offline />}</span>
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};