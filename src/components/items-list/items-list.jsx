import { useState, useEffect } from 'react';
import { getData } from '../../services/fakeApi';
import Item from '../point-item/point-item';
import Styles from './items-list.module.scss'

const ItemsList = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        getData()
          .then(res => {
            if (res && res.success) {
              setData(res.pickPoints);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, []);

    return (
        <div className={Styles.pointersList}>
            {
            data.map(item => <Item data={item} key={item.address}/>)
            }
        </div>
    )
}

export default ItemsList;