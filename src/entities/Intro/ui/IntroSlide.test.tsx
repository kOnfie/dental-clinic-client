import { render, screen } from '@testing-library/react';
import IntroSlide from './IntroSlide';

describe('Intro slide component', () => {
  it('should render intro slide component with title', () => {
    render(<IntroSlide title="Test title" btnText="Test button" />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
});
