import { Link } from 'react-router-dom';
import { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
	return (
		<Link to={`/product/${props.id}`} id='ProductCard'>
			<div className='card'>
				<div className='head' style={{ backgroundImage: `url('${props.image}')` }}>
					<div className='price'>
						{props.price}&nbsp;
						<span className='currency'>₽</span>
					</div>
					<button className='add-to-cart'>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
					</button>
					<div className='rating'>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Иконка звезды" />
					</div>
				</div>
				<div className='footer'>
					<div className='title'>{props.name}</div>
					<div className='description'>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;