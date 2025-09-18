import { AddIcon, RemoveIcon, SearchIcon, ChevronIcon , CrossIcon, InfoIcon} from "./icons";

type iIconVariants = 'add' | 'remove' | 'search' | "chevronDown" | "X" | "LucideInfo"

const IshanIcon: React.FC<{ variant: iIconVariants, className?: string }> = ({ variant, className, ...props }) => {

  if (variant === 'add') return <AddIcon {...props} className={className} />
  if (variant === "remove") return <RemoveIcon {...props} className={className} />
  if (variant === "search") return <SearchIcon {...props} className={className} />
  if (variant === "chevronDown") return <ChevronIcon {...props} className={className} />
  if (variant === "X") return <CrossIcon {...props} className={className} />
  if (variant==="LucideInfo") return <InfoIcon {...props} className={className} /> 

}

export default IshanIcon;