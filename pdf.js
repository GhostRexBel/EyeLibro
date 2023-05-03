PDFJS.getDocument('D:\Git\Eye-Libro\public\Libros Cortos\tom%20sawyer.pdf').then(function(pdf) {
    pdf.getPage(1).then(function(page) {
      var scale = 1.5;
      var viewport = page.getViewport(scale);
  
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
  
      document.querySelector('#pdf-container').appendChild(canvas);
  
      page.render({
        canvasContext: context,
        viewport: viewport
      });
    });
  });