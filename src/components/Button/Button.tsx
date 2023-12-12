import { ButtonProps } from './Button.props';

function Button({ children, className, appearance = 'small', ...props }: ButtonProps) {
	return (
		<button className={`button accent ${className} ${appearance === 'small' ? 'small' : ''} ${appearance === 'big' ? 'big' : ''}`} {...props}>{children}</button>
	);
}

export default Button;