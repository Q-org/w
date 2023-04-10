import React from 'react';
import { FacebookProvider, Like } from 'react-facebook';

export default function LikeExample() {
    return (
        <FacebookProvider appId="123456789">
            <Like href="http://www.facebook.com" colorScheme="light" showFaces share />
        </FacebookProvider>
    );
}