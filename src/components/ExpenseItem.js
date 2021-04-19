//Component code written in react is just a function.
import './ExpenseItem.css';

function ExpenseItem(){

    return <div className="expense-item">
                <div>April 19 2021</div>
                <div className="expense-item__description">
                    <h2>Detail</h2>
                    <div className="expense-item__price">$37.37</div>
                </div>
            </div>;
}
export default ExpenseItem;