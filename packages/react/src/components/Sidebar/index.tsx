import { useState } from 'react'
import { menuLinks } from '../../Data/menuLinks'
import { NavLink } from './NavLink'
import { RocketLaunchIcon, Bars3Icon } from '@heroicons/react/24/solid'
import {
  Aside,
  ContainerHeader,
  ButtonHamburguer,
  ContainerHeaderCollapse,
} from './styles'
import { BrowserRouter } from 'react-router-dom'

interface SidebarProps {
  links: any
}

export function Sidebar({ links }: SidebarProps) {
  const [collapse, setCollapse] = useState(false)

  function handleCollapse() {
    setCollapse(!collapse)
  }

  return (
      <Aside collapse={collapse}>
        {collapse ? (
          <>
            <ContainerHeaderCollapse>
              <ButtonHamburguer onClick={handleCollapse}>
                <Bars3Icon />
              </ButtonHamburguer>

              <RocketLaunchIcon width={18} />
            </ContainerHeaderCollapse>
          </>
        ) : (
          <>
            <ContainerHeader>
              <div>
                <RocketLaunchIcon width={18} />
                <strong>Base 2 Launch</strong>
              </div>
              <ButtonHamburguer onClick={handleCollapse}>
                <Bars3Icon />
              </ButtonHamburguer>
            </ContainerHeader>
          </>
        )}

        <nav>
          <ul>

            {
              links === undefined ?

                menuLinks.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      item={item}
                      collapse={collapse}
                    />
                  )
                })
                :
                links.map((item: any, index: any) => {
                  return (
                    <NavLink
                      key={index}
                      item={item}
                      collapse={collapse}
                    />
                  )
                })
            }
          </ul>
        </nav>
      </Aside>
  )
}
