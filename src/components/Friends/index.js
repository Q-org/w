import React from 'react';


export default function FriendsComponent({ friends }) {
    if (!friends) {
        console.warn('friends is ', friends)
        return null
    }



    return <div>你的朋友是：{friends.join(',')}</div>;
}