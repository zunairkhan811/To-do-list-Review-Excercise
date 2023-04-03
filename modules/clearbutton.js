export default function clearbutton() {
  const clearbtn = document.querySelector('.btn-div');
  clearbtn.addEventListener('click', () => {
    const newArray = JSON.parse(localStorage.getItem('Tasks'));

    const filterArray = newArray.filter((item) => item.completed === false);
    filterArray.forEach((item, i) => {
      item.index = i;
    });
    localStorage.setItem('Tasks', JSON.stringify(filterArray));
        location.reload(); // eslint-disable-line

  });
}