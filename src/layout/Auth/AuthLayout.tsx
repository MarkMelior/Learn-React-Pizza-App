import { Outlet } from 'react-router-dom';

export function AuthLayout() {
	return <div id='AuthLayout'>
		<div className='logo'>
			<img src="/logo.svg" alt="Логотип компании" />
		</div>
		<div className='content'>
			<Outlet />
		</div>
	</div>;
}