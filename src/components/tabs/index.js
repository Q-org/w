import React from 'react';

export default function FriendsComponent({friends}) {
  return <div>你的朋友是：{friends.join(',')}</div>;
}