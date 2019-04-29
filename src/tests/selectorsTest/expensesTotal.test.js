import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expensesFixture'

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})
test('should add up single Expense', () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(100)
})

test('should add up mutilpleExpenses', () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(120550)
})