const filterWith = (array: any[], filter: string) => {
  if (filter.length > 0 && filter.length < 3) {
    return [];
  } else if (filter.length === 0) {
    return array;
  } else {
    return array.filter((item) => {
      if (filter.length >= 3) {
        return JSON.stringify(item).includes(filter) ? item : null;
      }
    });
  }
};
