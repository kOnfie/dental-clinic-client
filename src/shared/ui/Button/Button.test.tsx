import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('should render button component with children', () => {
    render(<Button>Test button</Button>);

    expect(screen.getByText('Test button')).toBeInTheDocument();
  });

  it('should invoke callback on button click', () => {
    const cb = jest.fn();

    render(
      <Button type="button" handleClickButton={cb}>
        Test button
      </Button>
    );

    const btnEl = screen.getByText('Test button');

    expect(btnEl).toBeInTheDocument();

    fireEvent.click(btnEl);

    expect(cb).toHaveBeenCalledTimes(1);
  });
});
