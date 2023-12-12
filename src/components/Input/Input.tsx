import { forwardRef } from 'react';
import { InputProps } from './Input.props';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ isValid = true, className, ...props }, ref) {
	return (
		<input ref={ref} {...props} className={`input ${className}
		${isValid ? 'invalid' : ''}`}></input>
	);
});

export default Input;