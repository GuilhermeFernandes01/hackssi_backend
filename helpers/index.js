const validArray = array => array?.length > 0;

const capitalizeFirstLetter = text => {
  const textNormalized = text.replace(/\s+/g, ' ').trim();
  const words = textNormalized.toLowerCase().split(' ');
  for (let a = 0; a < words.length; a++) {
    const w = words[a];
    words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(' ');
};

const datadogTagsFormatter = (resource, service, tracerName) => ({
  tags: {
    'resource.name': resource,
    'service.name': service,
  },
  tracerName,
});

module.exports = {
  validArray,
  capitalizeFirstLetter,
  datadogTagsFormatter,
};
