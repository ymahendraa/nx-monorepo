
export interface CircleIconProps {
    iconUrl?: string;
    className?: string;
}

export const CircleIcon: React.FC<CircleIconProps> = ({ iconUrl, className }) => {
    console.log('iconUrl', iconUrl)
    return (
        <div className={`${className}`}>
            <img src={iconUrl} alt="icon" />
        </div>
    )
}

