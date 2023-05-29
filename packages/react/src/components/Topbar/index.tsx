import { useState } from 'react'

import { Container, ContainerTitle, ContainerSearch, Search, Input } from "./styles"
import { ArrowPathIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"

import { Avatar } from '../Avatar';

export function Topbar() {
    const [search, setSearch] = useState('');

    const getProducts = async (values: any) => {
        console.log(values)
    };

    return (
        <Container>
            <ContainerTitle>
                <h1>
                    Nome da página atual
                </h1>
                <div>
                    <p>
                        Página anterior
                    </p>
                    <p>
                        &gt;
                    </p>
                    <p>
                        Página atual
                    </p>

                </div>
            </ContainerTitle>

            <ContainerSearch>
                <div>
                    <ArrowPathIcon 
                        width={16} 
                        onClick={() => console.log('atualizar')}
                        title='Atualizar'
                    />
                    <span>Atualizado há 2 horas</span>
                </div>

                <Search>
                    <div>
                        <MagnifyingGlassIcon width={16} />

                        <Input
                            type="text"
                            name="search"
                            placeholder="Buscar"
                            className="w-full h-full focus:outline-none  text-gray-500 text-base "
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>
                </Search>

                <Avatar />

            </ContainerSearch>

        </Container>
    )
}