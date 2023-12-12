import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';

export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout);
		navigate('/auth/login');
	};

	return <div className='layout'>
		<div className='sidebar'>
			<div className='user'>
				<img className='avatar' src="/avatar.png" alt="Аватар пользователя" />
				<div className='name'>{profile?.name}</div>
				<div className='email'>{profile?.email}</div>
			</div>
			<div className='menu'>
				<NavLink to='/' className='link'>
					{/* <NavLink to='/' className={({ isActive }) => `link ${isActive ? 'active' : ''}`}> */}
					<img src="/menu-icon.svg" alt="Иконка меню" />
					Меню</NavLink>
				<NavLink to='/cart' className='link'>
					<img src="/cart-icon.svg" alt="Иконка корзины" />Корзина</NavLink>
			</div>
			<Button className='exit' onClick={logout}>
				<img src="/exit-icon.svg" alt="Иконка выхода" />
				Выход
			</Button>
		</div>
		<div className='content'>
			<Outlet />
		</div>
	</div>;
}