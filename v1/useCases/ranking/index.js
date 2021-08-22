const convertToNumber = ({ skipValue, limitValue }) => ({ skip: Number(skipValue) || 0, limit: Number(limitValue) || 10 });

const wrapper = ({
  repository,
}) => {
  const getRanking = (skipValue, limitValue) => {
    const { skip, limit } = convertToNumber({ skipValue, limitValue });

    return repository.rankingCollection.findWithSort({ points: -1 }, skip, limit);
  };

  return {
    getRanking,
  };
};

module.exports = wrapper;
