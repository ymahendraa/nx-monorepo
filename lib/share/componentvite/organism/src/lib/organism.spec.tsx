import { render } from '@testing-library/react';

import Organism from './organism';

describe('Organism', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Organism />);
    expect(baseElement).toBeTruthy();
  });
});
