function deleteExpense(id) {
    axios
        .delete(`https://crudcrud.com/api/bdd99c4da68043df8192ae03862c81b9/appointmentData/${id}`)
        .then((response) => {
            console.log(`Expense with ID ${response.data._id} deleted successfully`);
            displayExpenses();
        })
        .catch((error) => {
            console.log(`Error deleting expense: ${error}`);
        });
}
