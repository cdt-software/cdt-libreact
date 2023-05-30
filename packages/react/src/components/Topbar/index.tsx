import { useEffect, useState } from 'react'

import {
    Container,
    ContainerTitle,
    ContainerSearch,
    Search,
    Input,
    DeleteButton,
    Ul,
} from "./styles"
import { ArrowPathIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { dataItems } from '../../Data/dataiItems';

import { Avatar } from '../Avatar';

export function Topbar({}) {
    const [listProducts, setListProducts] = useState(dataItems);
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(dataItems);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (search.length > 0) {
            setLoading(false);
            setItems(
                listProducts.filter((item: any) =>
                    item?.criador.toLowerCase().includes(search.toLowerCase()) || item?.title?.toLowerCase().includes(search.toLowerCase())
                )
            );

            setTimeout(() => {
                setLoading(true);
            }, 2000);

            return;
        }
        setItems([]);
    };

    const getProducts = async (values: any) => {
        console.log(values)
    };

    const handleDeleteItems = () => {
        setSearch('');
        setItems([]);
    };

    useEffect(() => {
        handleSearch();
    }, [search]);

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
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <DeleteButton
                            items={search !== '' ? 'block' : 'hidden'}
                            onClick={handleDeleteItems}
                        >
                            <XMarkIcon width={18} />
                        </DeleteButton>

                        {
                            items.length == 0
                                ?
                                <Ul
                                    items={search !== '' ? 'block' : 'hidden'}
                                >
                                    <li>
                                        Não encontrado.
                                    </li>
                                </Ul>
                                :
                                (loading ? (
                                    <Ul>
                                        {items.map((item: any) => {
                                            return (
                                                <li
                                                    key={item.id}
                                                    className="my-6 hover:bg-gray-50 p-3 cursor-pointer border-b "
                                                >
                                                    <a href={item.url}>
                                                        <div>
                                                            <p>
                                                                {item.title}
                                                            </p>

                                                            <p>
                                                                {item.criador}
                                                            </p>

                                                            <p>
                                                                {item.date}
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </Ul>
                                ) : (
                                    <Ul>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <span>Carregando...</span>
                                        </div>
                                    </Ul>
                                ))
                        }
                    </div>
                </Search>

                <Avatar />

            </ContainerSearch>

        </Container>
    )
}