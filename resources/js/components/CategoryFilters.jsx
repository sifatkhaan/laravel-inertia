import { useState, useCallback  } from 'react';
import { Slider, ConfigProvider } from 'antd';
import { router } from '@inertiajs/react';
import debounce from "lodash/debounce";

function CategoryFilters({ filters, categoryId }) {

  const [subCategory, setSubCategory] = useState(filters.sub_category_id || '');
  const [isPortrait, setIsPortrait] = useState(filters.isPortrait || '');
  const [author, setAuthor] = useState(filters.author || '');
  const [range, setRange] = useState([500, 2500]);


  const applyFilters = useCallback(
    debounce((newFilters) => {
      router.get(`/category/${categoryId}`, newFilters, {
        preserveState: true,
        replace: true,
      });
    }, 500), // Delay API call for 500ms
    [categoryId]
  );

  const handleFilterChange = (key, value) => {
    const newFilters = {
      subcategory_id: subCategory,
      isPortrait: key === 'isPortrait' ? value : isPortrait,
      author: author,
      price_min: key === 'price' ? value[0] : range[0],
      price_max: key === 'price' ? value[1] : range[1],
    };

    if (key === 'isPortrait') {
      setIsPortrait(value);
    }
    if (key === 'price') {
      setRange(value);
    }
    const cleanedFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([_, v]) => v !== '' && v !== null && v !== undefined)
    );
    // router.get(`/category/${categoryId}`, cleanedFilters, {
    //   preserveState: true, // Keeps UI state
    //   replace: true, // Updates URL without full page reload
    // });
    applyFilters(cleanedFilters);
  };

  const theme = {
    components: {
      Slider: {
        trackBg: '#68a010',
        trackHoverBg: '#a7e239', // Changes the track (filled part) color
      },
    },
  };

  return (
    <div>
      <div className="my-5 py-2">
       
        <h3 className='font-semibold text-gray-700'>Mode : </h3>
        <div className='flex gap-2'>
          <button className='bg-yellow-300 rounded-md shadow-md p-1 px-2' onClick={() => handleFilterChange('isPortrait', '0')}>Landscape</button>
          <button className='bg-yellow-300 rounded-md shadow-md p-1 px-2' onClick={() => handleFilterChange('isPortrait', '1')}>Portrait</button>
        </div>
      </div>
      <div>
        <h3 className='font-semibold text-gray-700'>Price range : </h3>
        <ConfigProvider theme={theme}>
          <Slider
            range
            defaultValue={[500, 2500]}
            value={range}
            min={100}
            max={3000}
            onChange={(value)=>handleFilterChange('price', value)}
          />
        </ConfigProvider>
      </div>
    </div>
  )
}

export default CategoryFilters