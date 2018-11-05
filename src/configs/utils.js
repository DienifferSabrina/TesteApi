const qtdPerPage = parseInt(process.env.NUMBER_PER_PAGE); 

function defineLimit(page = 0) {
  page = parseInt(page) - 1;
  return [
    qtdPerPage,
    page * qtdPerPage
  ];
}

function responseHelpers(data, dataCount, page = 1) {
  page = parseInt(page);
  const pages = Math.ceil(dataCount[0].count / qtdPerPage);
  if (pages < page) throw new Error('Numero de pagina invalida');
  return {
    pageActual: page,
    pages: Math.round(pages),
    data: data
  };
}

module.exports = {
  responseHelpers,
  defineLimit
}