import React, { useState, useEffect } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import Products from './Products'; 
import { SearchResultsList } from './SearchResultsList';
import './SearchResultsList.css';
import { CartContext } from './CartContext';
import Sidebar from './Sidebar';
import axios from 'axios';
import { getData } from '../service/RestApiService';
import { highlightText } from './SearchResult';

const Main = ({ shopCart, addToCart }) => {
    console.log(shopCart)
    

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [dataFromApi, setDataFromApi] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');


    useEffect(() => {
        getData().then((res) => {
            setDataFromApi(res.data.hits);
            setFilteredProducts(res.data.hits);
            
        });
    }, []);
    

    console.log(dataFromApi)
    useEffect(() => {
        handleSearchClick();
    }, [searchInput]);

    const categ = dataFromApi?.map(item=>item._source.manufacturer_name)
    const categories =[...new Set(categ)];
    console.log(categories)
    
    const handleSearchClick = () => {
        if (!searchInput) {
            setFilteredProducts(dataFromApi);
            return;
        }
        
        const searchInputLower = searchInput.toLowerCase();
    
        const filterBySearch = dataFromApi?.filter((item) => {
            const itemValues = Object.values(item._source).map(value => {
                return typeof value === 'object' ? JSON.stringify(value).toLowerCase() : value.toString().toLowerCase();
            });
            
            return itemValues.some(value => value.includes(searchInputLower));
        });
    
        setFilteredProducts(filterBySearch);
    };

    const handleSearchInputChange = (value) => {
        setSearchInput(value);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProducts(dataFromApi);
        } else {
            const filteredByCategory = dataFromApi.filter(product =>
                product._source.manufacturer_name.toLowerCase().includes(category.toLowerCase())
            );
            setFilteredProducts(filteredByCategory);
        }
    };

    return (
        <div>
            <div className='header flex justify-between items-center p-4 bg-white '>
                <h1 className='text-3xl font-bold text-customGreen'>Discover Our Products</h1>
                <div className='flex flex-col w-[50%] relative'>
                    <div className='search flex justify-between items-center px-5 py-2 bg-gray-100 rounded-md'>
                        <input
                            type="text"
                            placeholder='Search product'
                            className='bg-transparent outline-0 w-[100%]'
                            value={searchInput}
                            onChange={(e) => handleSearchInputChange(e.target.value)}
                        />
                        <button><CiSearch /></button>
                    </div>
                    {searchInput &&
                        <div className='absolute w-full'>
                            <SearchResultsList results={filteredProducts} input={searchInput} className='w-[100%]' />
                        </div>
                    }
                </div>
            </div>
            <div className='categories bg-white flex justify-between lg:w-[80%] sm:space-x-4 sm:w-[100%] md:w-[100%] md:space-x-2 px-2 py-8'>
                {categories.map((category, index) => (
                    <div 
                        key={index} 
                        className={`cursor-pointer rounded-full px-5 py-2 drop-shadow-md ${category === selectedCategory ? 'bg-black text-white' : 'bg-white text-black'}`} 
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </div>
                ))}
            </div>
            <div className='products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 z-20 p-4 '>
                {filteredProducts.map((product) => (
                    <div key={product._id} className='product h-[500px] bg-white drop-shadow-xl p-2 border'>
                        <img src={"https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt={product._score} className='w-full h-[60%] object-cover p-2'/>
                        <div className='m-2 bg-gray-100 p-2 h-[180px]'>
                            <h1 className='text-xl font-semibold'>{highlightText(product._source.description,searchInput)}</h1>
                            <p className='text-sm'>{product._score}</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-xl font-bold'>{product._source.price} TND</p>
                                <button onClick={() => addToCart(product)}>
                                    <CiShoppingCart size={"1.5rem"} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
