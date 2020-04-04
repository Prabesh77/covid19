export const fetchFirst = (country, setData) => {
  // TOp
  fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((res) => res.json())
    .then((data) => {
      setData({ data });
    })
    .catch((err) => console.log(err));
};

export const fetchSecond = (country, setData) => {
  // SEC
  fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((res) => res.json())
    .then((data) => {
      setData({ data });
    })
    .catch((err) => console.log(err));
};

export const fetchThird = (country, setData) => {
  //THIRD
  fetch(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((res) => res.json())
    .then((data) => {
      setData({ data });
    })
    .catch((err) => console.log(err));
};
