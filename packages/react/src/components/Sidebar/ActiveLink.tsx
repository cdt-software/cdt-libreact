import { Link, BrowserRouter } from 'react-router-dom';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
    href: string;
}

export function ActiveLink({ href, children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
    const asPath = window.location.pathname

    console.log(href)

    let isActive = false;

    if (shouldMatchExactHref && (asPath === href)) {
        isActive = false;
    }

    if (
        !shouldMatchExactHref &&
        (asPath.endsWith(String(href)) || asPath.startsWith(String(href)))
    ) {
        isActive = true;
    }
    return (
        <BrowserRouter>
            <Link
                style={
                    isActive ? {
                        color: "#1565C0",
                        fontWeight: '600'
                    }
                        : {
                            color: "#57667A"
                        }
                }
                to={'/'}
                {...rest}>
                {cloneElement(children, {
                    className: isActive
                        ? 'text-red text-sm'
                        : 'text-sm text-gray-400 hover:text-red',
                })}
            </Link>
        </BrowserRouter>
    );
}