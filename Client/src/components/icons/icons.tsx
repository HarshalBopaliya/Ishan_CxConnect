
import {
    Plus,
    Trash,
    Search,
    ChevronDown,
    X,
    LucideInfo
  } from "lucide-react";


export const RemoveIcon = ({className}: {className?: string})  => {
    return <Trash className={className}/>
}

export const AddIcon = ({className}: {className?: string}) => {
    return <Plus className={className}/>
}

export const SearchIcon = ({className}: {className?: string}) =>{
    return <Search className={className}/>
}
export const ChevronIcon = ({className}: {className?: string}) =>{
    return <ChevronDown className={className}   />
}

export const CrossIcon = ({className}: {className?: string}) =>{
    return <X className={className}   />
}

export const InfoIcon = ({className}:{className?:string})=>{
    return <LucideInfo className={className} />
}