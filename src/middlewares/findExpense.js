const expenseModel = require('../models/expenseModel');

const findExpense = async (req, res, next) => {
  const expenseId = Number(req.params.id);
  const expense = await expenseModel.getExpenseById(expenseId);

  if (!expense) {
    return res.status(404).json({ error: 'Expense not Found' });
  }
  req.expense = expense;
  next();
};

module.exports = {
  findExpense,
};
