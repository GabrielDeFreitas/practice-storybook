interface NotificationContentProps {
    text?: string
    description?: string
}

export function NotificationContent({ text, description }: NotificationContentProps) {
    return (
        <div className='flex-1 flex flex-col'>
            {text && (
                <h1 className='text-md leading-relaxed text-zinc-700'>
                    {text}
                </h1>
            )}
            {description && (
                <p className='text-sm leading-relaxed text-zinc-500'>
                    {description}
                </p>
            )}
        </div>
    );
}