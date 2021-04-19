//Component code written in react is just a function.
import './ExpenseItem.css';

function ExpenseItem(){

    const expenseDate = new Date(2021,3, 19);
    const expenseTitle = 'D & D Detailing';
    const expenseAmount = 294.37;

    return <div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </div>;
}
export default ExpenseItem;