
import { GifItem } from "./GifItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({ categoria }) => {

  const { images, isLoading } = useFecthGifs( categoria );

  
  return (
    <>
        <h3>{ categoria }</h3>
        {
          isLoading && ( <h2> Cargando...</h2> )          
        }
        <div className="card-grid">
          {
            images.map( image => (              
              <GifItem 
                key={ image.id }
                { ...image }
              />
              ))
          }          
        </div>
    </>
  )
}
