import { menuLinks } from "../../Data/menuLinks"
import { NavLink } from "./NavLink"
import { Aside, ContainerHeader } from "./styles"
import { RocketLaunchIcon, Bars3Icon } from '@heroicons/react/24/solid'

export function Sidebar() {
    return (
        <Aside>
            <ContainerHeader>
                <div>
                    <RocketLaunchIcon width={18} />
                    <strong>Base 2 Launch</strong>
                </div>
                <Bars3Icon />
            </ContainerHeader>

            <nav>
                <ul>
                    {
                        menuLinks.map((item, index) => {
                            return (
                                <NavLink 
                                    key={index} 
                                    item={item} 
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </Aside>
    )
}