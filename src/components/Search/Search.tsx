import { forwardRef } from 'react';
import { SearchProps } from './Search.props';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
	return (
		<div className='input-wrapper'>
			<input ref={ref} {...props} className={`input-search ${className}
			${isValid ? 'invalid' : ''}`}></input>
			<img className='icon' src="/public/search-icon.svg" alt="" />
		</div>
	);
});

export default Search;