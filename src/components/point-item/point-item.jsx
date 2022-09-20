import Styles from './point-item.module.scss';

const Item = (data) => {
    return (
        <div className={Styles.item}>
            <h2 className={Styles.addressName}>{data.data.address}</h2>
            <div className={Styles.buttonList}>
            {
                data.data.budgets.map((item, i) => <button className={Styles.button} key={i}>{item}</button>)
            }
            </div>    
        </div>
    )
}
export default Item;