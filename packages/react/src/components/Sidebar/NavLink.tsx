import { ReactNode, useEffect, useState } from "react";

import {
    Li,
    ContainerTitle,
    ContainerIcon,
    SectionTitle,
    ContainerChildren,
    ChildBorder
} from "./styles";

import { ChevronDownIcon, HeartIcon } from "@heroicons/react/24/solid";

type Props = {
    title: string;
    href: string;
};

interface NavLinkProps {
    item: {
        children?: Props[];
        icon: string;
        id: number;
        title: string;
    }
}

export function NavLink({ item }: NavLinkProps) {
    const [open, setOpen] = useState(false);
    const [openTitleChild, setOpenTitleChild] = useState(false)

    const menuOpened = (): void => {
        if (item?.children) {
            item.children.map((child: any) => {
                if (child.href == 'asPath') {
                    setOpen(true);
                }
            });
        }
    };

    const menu = (): void => {
        if (item?.children) {
            item.children.map((child: any) => {
                child.children?.map((child: any) => {
                    if (child.href == 'asPath') {
                        setOpen(true);
                        setOpenTitleChild(true)
                    }
                })
            });
        }
    };

    useEffect(() => {
        menuOpened();
        menu();
    }, []);


    if (item.children) {
        return (
            <>
                <SectionTitle>Section Title</SectionTitle>
                <Li>
                    <ContainerTitle
                        open={open}
                        onClick={() => setOpen(!open)}>
                        <ContainerIcon
                            open={open}
                            className=" flex items-center justify-between gap-3 w-full h-4">

                            <HeartIcon width={20} />

                            <span>
                                {item.title}
                            </span>

                        </ContainerIcon>

                        <div style={{ transform: open ? 'rotate(3.142rad)' : 'rotate(0)' }}>
                            <ChevronDownIcon
                                width={15}
                                style={
                                    open ?
                                        {
                                            color: '#0D47A1'
                                        }
                                        :
                                        {
                                            color: '#B0B9C6'
                                        }
                                }
                            />
                        </div>
                    </ContainerTitle>

                    <ContainerChildren
                        open={open}
                    >
                        <ChildBorder></ChildBorder>
                        {item.children.map((child: any, index: number) => (
                            <a key={index}>
                                <div></div>
                                <span>{child.title}</span>
                            </a>
                        ))}
                    </ContainerChildren>
                </Li>
            </>
        );
    } else {
        return (
            <li className="mb-10 cursor-pointer hover:text-red pr-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between gap-3">
                        <a href="/">
                            <span className="text-sm text-gray-400 hover:text-red">
                                {item.title}
                            </span>
                        </a>
                    </div>
                </div>
            </li>
        );
    }

}
