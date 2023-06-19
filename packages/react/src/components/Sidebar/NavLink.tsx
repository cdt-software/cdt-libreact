import { ReactNode, useEffect, useState } from 'react'
import { ActiveLink } from './ActiveLink'

import {
  Li,
  ContainerTitle,
  ContainerIcon,
  SectionTitle,
  ContainerChildren,
  ChildBorder,
  ContainerIconCollapse,
  ContainerLinkCollapse,
} from './styles'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { HeartIcon } from '@heroicons/react/24/outline'

import * as Icon from '@heroicons/react/24/outline'

type Props = {
  title: string
  href: string
}

interface NavLinkProps {
  item: any;
  collapse: boolean;
}

export function NavLink({ item, collapse }: NavLinkProps) {
  const IconeComponente = Icon[item.icon as keyof typeof Icon];
  const [open, setOpen] = useState(false)
  const [openTitleChild, setOpenTitleChild] = useState(false)
  const [showLinkCollapse, setShowLinkCollapse] = useState(false)

  const asPath = window.location.pathname

  const menuOpened = (): void => {
    if (item?.children) {
      item.children.map((child: any) => {
        if (child.href == asPath) {
          setOpen(true);
        }
      });
    }
  };

  useEffect(() => {
    menuOpened();
  }, []);

  if (collapse == false) {
    return (
      <>
        <SectionTitle>{item.sectionTitle}</SectionTitle>
        <Li>
          <ContainerTitle open={open} onClick={() => setOpen(!open)}>
            <ContainerIcon open={open}>

              {
                !IconeComponente ?
                  <Icon.HeartIcon width={20} height={20} />
                  :
                  <IconeComponente width={20} height={20} />
              }


              <span>{item.title}</span>
            </ContainerIcon>

            <div style={{ transform: open ? 'rotate(3.142rad)' : 'rotate(0)' }}>
              <ChevronDownIcon
                width={15}
                style={
                  open
                    ? {
                      color: '#0D47A1',
                    }
                    : {
                      color: '#B0B9C6',
                    }
                }
              />
            </div>
          </ContainerTitle>

          <ContainerChildren open={open}>
            <ChildBorder></ChildBorder>
            {item.children!.map((child: any, index: number) => (
              <ActiveLink
                key={index}
                href={child.href}
              >
                <>
                  <div></div>
                  <span>{child.title}</span>
                </>
              </ActiveLink>
            ))}
          </ContainerChildren>
        </Li>
      </>
    )
  } else {
    return (
      <ContainerIconCollapse
        showLinkCollapse={showLinkCollapse}
        onClick={() => setShowLinkCollapse(!showLinkCollapse)}
      >
        {
          !IconeComponente ?
            <Icon.HeartIcon width={20} height={20} />
            :
            <IconeComponente width={20} height={20} />
        }


        <ContainerLinkCollapse showLinkCollapse={showLinkCollapse}>
          {
            item.children!.map((child: any, index: number) => (
              <ActiveLink
                key={index}
                href={child.href}
              >
                <span>{child.title}</span>
              </ActiveLink>
            ))
          }
        </ContainerLinkCollapse>
      </ContainerIconCollapse>
    )
  }
}

