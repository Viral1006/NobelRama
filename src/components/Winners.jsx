import React, { Component } from 'react';
import axios from 'axios';

class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nobelPrizes: [],
      filteredPrizes: [],
      selectedCategory: '',
      selectedYear: '',
      loading: true
    };
  }

  componentDidMount() {
    axios.get('https://api.nobelprize.org/v1/prize.json')
      .then(response => {
        console.log('API Response:', response.data); // Log the API response
        this.setState({ nobelPrizes: response.data.prizes, filteredPrizes: response.data.prizes, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  handleCategoryClick = (category) => {
    const { nobelPrizes, selectedYear } = this.state;
    const filteredPrizes = nobelPrizes.filter(prize => prize.category === category && (!selectedYear || prize.year === selectedYear));
    this.setState({ filteredPrizes, selectedCategory: category });
  };

  handleYearChange = (year) => {
    const { nobelPrizes, selectedCategory } = this.state;
    const filteredPrizes = nobelPrizes.filter(prize => (!selectedCategory || prize.category === selectedCategory) && (!year || prize.year === year));
    this.setState({ filteredPrizes, selectedYear: year });
  };

  render() {
    const { filteredPrizes, loading, selectedYear } = this.state;
  
    if (loading) {
      return <div>Loading...</div>; // or any loading indicator you prefer
    }
  
    return (
      <div className='bg-[#ffffff] overflow-visible w-full h-auto min-h-[850px] flex flex-col items-center justify-center'>
        <div className='font-abril text-[40px] mt-8 mb-10 text-[#333333]'>
          Nobel Winners
        </div>

        {/* <div className='flex space-x-10 mb-10'> */}
         
          {/* {['Physics', 'Chemistry', 'Literature', 'Medicine', 'Peace'].map(category => (
            <button
              key={category}
              className={`w-auto h-10 bg-none text-white font-zilla-slab font-normal rounded-lg transition-transform duration-300 transform hover:scale-110 ${selectedCategory === category ? 'bg-[#890620]' : ''}`}
              onClick={() => this.handleCategoryClick(category)}
            >
              {category}
            </button>
          ))} */}
        {/* </div> */}

        <div className='flex items-center space-x-4 mb-4 mr-[80%] '>
          <label htmlFor='yearFilter' className='font-zilla-slab text-lg'>Filter by Year:</label>
          <select
            id='yearFilter'
            className='w-32 h-10 border border-gray-400 rounded-lg p-2 focus:outline-none'
            value={selectedYear}
            onChange={(e) => this.handleYearChange(e.target.value)}
          >
            <option value=''>All</option>
            {Array.from({ length: 2019 - 1900 }, (_, i) => 1900 + i).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        

        <div className='grid grid-cols-4 grid-rows-4 gap-4 font-abril mx-4'>
          {filteredPrizes.map((prize, index) => {
            return (
              <div key={index} className='w-auto h-48 px-20 py-32 bg-[#ebebeb] text-[#333333] rounded-xl'>
                <div className='text-lg font-abril -mt-16'>{prize.year}</div>
                <div className='font-zilla-slab text-base mt-2'>{prize.category}</div>
                {prize.laureates && prize.laureates.map((laureate, innerIndex) => (
                  <div key={`${index}-${innerIndex}`} className='font-abril text-base mt-2'>
                    {laureate.firstname} {laureate.surname}
                  </div>
                ))}
                {/* {prize.overallMotivation && (
                  <div className='font-abril text-sm mt-2'>
                    {prize.overallMotivation}
                  </div>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Winners;

