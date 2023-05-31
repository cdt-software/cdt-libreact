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

interface TopbarProps {
    locations: any
    pageName: string;
    srcAvart: string;
}

export function Topbar({ locations, pageName = "Nome da página atual", srcAvart }: TopbarProps) {
    const [listProducts, setListProducts] = useState(locations === undefined ? dataItems : locations);
    const [search, setSearch] = useState('');
    const [items, setItems] = useState(locations === undefined ? dataItems : locations);
    const [loading, setLoading] = useState(false);
    const [lastUpdateValue, setLastUpdateValue] = useState(window.localStorage.getItem('LAST_UPDATE_VALUE'))

    const currentPage = window.location.pathname === '/' || window.location.pathname === '/iframe.html' ? 'Home' : window.location.pathname.replace('/', '')
    const currentHours = new Date().getHours();
    const currentTimeAndLastUpdate = currentHours - Number(lastUpdateValue)

    function updatingCurrentPage() {
        window.location.reload()
        window.localStorage.setItem('LAST_UPDATE_VALUE', String(currentHours))
    }

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
                    {pageName}
                </h1>
                <div>
                    <p>
                        <a href="javascript:history.back()">
                            Página anterior
                        </a>
                    </p>
                    <p>
                        &gt;
                    </p>
                    <p>
                        {currentPage}
                    </p>

                </div>
            </ContainerTitle>

            <ContainerSearch>
                <div>
                    <ArrowPathIcon
                        width={16}
                        onClick={updatingCurrentPage}
                        title='Atualizar'
                    />
                    <span>
                        Atualizado
                        {currentTimeAndLastUpdate == 0 ? ' recentemente' : ` há ${currentTimeAndLastUpdate} ${currentTimeAndLastUpdate > 1 ? ' horas' : ' hora'}`}
                    </span>
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
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span>Não encontrado.</span>
                                    </div>
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

                <Avatar
                    src={srcAvart}
                />

            </ContainerSearch>

        </Container>
    )
}