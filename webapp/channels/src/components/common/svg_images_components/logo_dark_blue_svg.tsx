// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import logoImage from '../../../images/header-logo.png';

type Props = {
    width?: number;
    height?: number;
    className?: string;
};

const BrandLogo = ({width = 182, height = 30, className}: Props) => (
    <img
        className={className}
        src={logoImage}
        alt='Alkafeel-Whatsapp'
        width={width}
        height={height}
        style={{display: 'block', objectFit: 'contain'}}
    />
);

export default BrandLogo;
