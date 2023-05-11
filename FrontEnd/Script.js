const element = document.getElementById("saveTransaction");

element.addEventListener("click", (event) => {
  event.preventDefault();
  let transactionBookName = document.getElementById("transactionBook").Value;
  let transactionBookId = document.getElementById("transactionBook").Value;
  let transaction = {
    bookName: transactionBookName,
    bookId: transactionBookId,
  };
  let transactionjson = JSON.stringify(transaction);
  fetch("http://localhost:3000/transaction", {
    method: "POST",
    body: transactionjson,
  });
});
