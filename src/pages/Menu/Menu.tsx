import { useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			// await new Promise<void>((resolve) => {
			// 	setTimeout(() => {
			// 		resolve();
			// 	}, 2000);
			// });
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return <div id='Menu'>
		<div className='head'>
			<Heading>Menu</Heading>
			<Search placeholder='Введите блюдо или состав'></Search>
		</div>
		<div>
			{error && <>{error}</>}
			{!isLoading && (
				<div className='wrapper'>
					{products.map((el) => (
						<ProductCard
							key={el.id}
							id={el.id}
							name={el.name}
							description={el.ingredients.join(', ')}
							rating={el.rating}
							price={el.price}
							image={el.image}
						/>
					))}
				</div>
			)}
			{isLoading && <p>Загружаем товары...</p>}
		</div>
	</div>;
}

export default Menu;