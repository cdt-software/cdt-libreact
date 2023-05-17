import { ComponentProps } from "react"
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles"
import { UserIcon } from '@heroicons/react/24/solid'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
    return (
        <AvatarContainer>
            <AvatarImage 
                {...props} 
            />

            <AvatarFallback delayMs={600}>
                <UserIcon />
            </AvatarFallback>
        </AvatarContainer>
    )
}