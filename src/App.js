import ExpenseItem from './components/ExpenseItem';

function App() {
    // These are expenses from the carwash
    const expenses = [
        {
            id: 'e1',
            title: 'rags',
            amount: 97.32,
            date: new Date (2021, 4, 18),
        },
        {
            id: 'e2',
            title: 'polish',
            amount: 197.32,
            date: new Date (2021, 4, 21),
        },
        {
            id: 'e3',
            title: 'soap',
            amount: 57.32,
            date: new Date (2021, 4, 19),
        },
        {
            id: 'e4',
            title: 'windex',
            amount: 27.32,
            date: new Date (2021, 4, 4),
        },
    ]
  return (
    <div>
      <h2>D & D Car Wash</h2>
        <p>A New Level of Clean</p>
        <ExpenseItem title={expenses[0].title}
                     amount={expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
            title={expenses[1].title}
            amount={expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
            title={expenses[2].title}
            amount={expenses[2].amount}
        ></ExpenseItem>
       <ExpenseItem
           title={expenses[3].title}
           amount={expenses[3].amount}
       ></ExpenseItem>
    </div>
  );
}

export default App;
