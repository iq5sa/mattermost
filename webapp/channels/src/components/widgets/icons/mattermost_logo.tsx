// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

import logoImage from '../../../images/header-logo.png';

export default function MattermostLogo(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();

    return (
        <span {...props}>
            <img
                src={logoImage}
                alt=''
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mattermost', defaultMessage: 'Alkafeel-Whatsapp Logo'})}
                style={{display: 'block', width: '100%', height: '100%', objectFit: 'contain'}}
            />
        </span>
    );
}
