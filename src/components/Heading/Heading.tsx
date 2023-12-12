import { HeadingProps } from './Heading.props';

function Heading({ children, className, ...props }: HeadingProps) {
	return (
		<h1 className={`h1 ${className}`} {...props}>{children}</h1>
	);
}

export default Heading;