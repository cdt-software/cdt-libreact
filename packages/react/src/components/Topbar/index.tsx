import { useEffect, useState } from 'react'

import {
    Container,
    ContainerTitle,
    ContainerSearch,
    Search,
    Input,
    DeleteButton
} from "./styles"
import { ArrowPathIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid"

import { Avatar } from '../Avatar';

export function Topbar() {
    const [listProducts, setListProducts] = useState<[]>([]);
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        if (search.length > 0) {
            setLoading(false);
            setItems(
                listProducts.filter((item: any) =>
                    item?.product?.name.toLowerCase().includes(search.toLowerCase()) || item?.name?.toLowerCase().includes(search.toLowerCase())
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

                    </div>
                </Search>

                <Avatar />

            </ContainerSearch>

        </Container>
    )
}