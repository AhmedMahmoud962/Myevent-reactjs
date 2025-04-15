import React from 'react'
import './Categories.css'
import icon_1 from '../../assets/category/Group (1).svg'
import icon_2 from '../../assets/category/Group (2).svg'
import icon_3 from '../../assets/category/Group (3).svg'
import icon_4 from '../../assets/category/Group (4).svg'
import icon_5 from '../../assets/category/Group (5).svg'
import icon_6 from '../../assets/category/Group (6).svg'
import icon_7 from '../../assets/category/Group (7).svg'
import icon_8 from '../../assets/category/Group (8).svg'



const categories = [
  { name: 'Music', image: icon_1 },
  { name: 'Nightlife', image: icon_2 },
  { name: 'Arts', image: icon_3 },
  { name: 'Holidays', image: icon_4 },
  { name: 'Dating', image: icon_5 },
  { name: 'Hobbies', image: icon_6 },
  { name: 'Business', image: icon_7 },
  { name: 'Food & Drink', image: icon_8 },
]

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-icon">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
