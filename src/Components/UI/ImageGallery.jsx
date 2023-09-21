import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Image from "./Image";
import ImagesArray from "../../Utils/Images";
import SortableImage from "./SortableImage";
import { 
    DndContext,
    useDroppable, 
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors} from "@dnd-kit/core";
    import { 
        SortableContext,
        arrayMove,
        rectSortingStrategy } from "@dnd-kit/sortable";
// import Image from "./Image";
const ImageGallery = (props) =>{
    const {authState, dispatch} = useContext(AppContext);
    const displayImages = authState.displayImages;

    const {setNodeRef} = useDroppable({
        id: 'images-area',
        disabled: false,
        data: {
            accepts: ['image'],
        }
    })
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 10,
        }
    })
    const touchSensor = useSensor(TouchSensor, {
        activationConstraint: {
            delay: 250,
            tolerance: 5,
        }
    })
    const sensors = useSensors(
        mouseSensor,
        touchSensor,
    )

    const handleDragEnd = (event)=>{
        const {active, over} = event;
        const oldIndex = authState.displayImages.findIndex(item=>item.id===active.id);
        const newIndex = authState.displayImages.findIndex(item=>item.id===over.id);
        const newArray = arrayMove(displayImages, oldIndex, newIndex)
        console.log(newArray);

        if (active.id !== over.id){
            dispatch({type: 'drag', payLoad: newArray});
        }

    }
    return <DndContext 
    sensors={sensors}
    onDragEnd={handleDragEnd}>
        <SortableContext 
        items={authState.displayImages} 
        strategy={rectSortingStrategy}>
            <div className="customGrid py-4 px-6">
            {authState.displayImages.map(image=>{
                return <SortableImage key={image.id} id={image.id}>
                    <Image url={image.url} id={image.id} />
                    <p>{image.tag}</p>
                </SortableImage>
            })}
            </div>
        </SortableContext>
    </DndContext>
};

export default ImageGallery;