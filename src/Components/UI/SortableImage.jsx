import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';
import Image from "./Image";

const SortableImage = (props)=>{
    const {attributes, listeners,setNodeRef, transform, transition} = useSortable({
        id: props.id,
        data: {
            type: 'image',
        },
        disabled: false,
        
        
    })
    const style = {
        transform: CSS.Translate.toString(transform),
        transition,
    }

    return <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="">
        {props.children}
    </div>
}

export default SortableImage;