import { GifItem } from './GifItem';
import { useFetchGif } from '../hooks/useFetchGif';
export const GifGrid = ({ category }) => {
  
    const { isLoading, images  } = useFetchGif(category);
    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <p>Loading...</p>
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
  )
}
