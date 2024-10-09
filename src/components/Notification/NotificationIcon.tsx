import { ElementType } from "react";

interface NotificationIconProps {
    icon: ElementType
    className?: string
}

export function NotificationIcon({icon: Icon}: NotificationIconProps) {
    return (
        <Icon className='w-6 h-6 text-zinc-800'/>
    )
}