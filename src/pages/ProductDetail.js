import { useParams, Link } from 'react-router-dom'

export const ProductDetailPage = () => {
    const params = useParams();
    return (
        <>
            <h1>Product detail page </h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    )
}