import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { SocialLink } from '../../styles/shared';
import config from '../../website-config';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';

const HomeNavRaise = css`
  @media (min-width: 900px) {
    position: relative;
    top: -70px;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content:center;
  align-items: center;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;
  margin-top: 50px;
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;
/* 
  @media (max-width: 700px) {
    display: none;
  } */
`;

const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  a:last-of-type {
    padding-right: 20px;
  }
`;

interface SiteNavProps {
  isHome?: boolean;
}

class SiteNav extends React.Component<SiteNavProps> {

  render() {
    const { isHome = false } = this.props;
    return (
      <nav css={SiteNavStyles}>
        <SiteNavRight>
          <SocialLinks>
            {config.facebook && (
              <a
                css={SocialLink}
                href={config.facebook}
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            )}
            {config.instagram && (
              <a
                css={SocialLink}
                href={config.instagram}
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            )}
          </SocialLinks>
        </SiteNavRight>
      </nav>
    );
  }
}

export default SiteNav;
