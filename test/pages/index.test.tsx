import React from 'react';
import { render } from '../testUtils';
import { Root } from '../../pages/index';
import * as nextRouter from 'next/router';
import BxLogo from 'components/icons/BlueExpress';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ replace: jest.fn() }));

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Root />, {});

    expect(asFragment()).toMatchSnapshot();
  });

  it('show loading', () => {
    const { container } = render(<Root />, {});
    const { container: bxLogoContainer } = render(<BxLogo width={100} />, {});

    const svg = container.firstChild.firstChild;

    expect(svg.isEqualNode(bxLogoContainer.firstChild)).toBeTruthy();
  });
});
