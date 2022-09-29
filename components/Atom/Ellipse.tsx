interface EllipseProps {
    className?: string;
}
export const Ellipse = ({className}:EllipseProps) => {
    return (
        <div className={`absolute bg-secondary blur-[150px] w-[500px] h-[500px] -z-10 ${className}`}/>
    )
}