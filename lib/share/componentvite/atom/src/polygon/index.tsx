interface PolygonProps {
    children?: React.ReactNode;
    className?: string;
}
export const PolygonShape: React.FC<PolygonProps> = ({ children, className }) => {
    return (
        <div className={`${className}`} style={{
            clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 15% 50%)'
        }}>{children}</div>
    )
}

