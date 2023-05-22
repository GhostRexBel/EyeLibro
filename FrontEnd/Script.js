const EyeTracker = document.getElementById("EyeTracker");
const BookDownload = document.getElementById("BookDownload");
const ViewNormal = document.getElementById("ViewNormal");

EyeTracker.addEventListener("click", async function () {
  let transactionBookName = this.getAttribute("data-value");
  let url = `http://localhost:4400/Link?bookName=${transactionBookName}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      window.open(data.link);
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (error) {
    console.error(error);
  }
});

BookDownload.addEventListener("click", async function () {
  let transactionBookName = this.getAttribute("data-value");
  let url = `http://localhost:4400/LinkDownload?bookName=${transactionBookName}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      const link = document.createElement("a");
      link.href = data.link;
      link.download = transactionBookName;
      link.click();
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (error) {
    console.error(error);
  }
});

ViewNormal.addEventListener("click", async function () {
  let transactionBookName = this.getAttribute("data-value");
  let url = `http://localhost:4400/Link?bookName=${transactionBookName}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      window.open(data.link);
    } else {
      throw new Error("Error en la respuesta del servidor");
    }
  } catch (error) {
    console.error(error);
  }
});
