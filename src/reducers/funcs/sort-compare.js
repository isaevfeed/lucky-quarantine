export default function sortCompare(a, b) {
  const statusA = +a.status;
  const statusB = +b.status;

  if (statusA < statusB) {
      return -1;
  } 

  return 1;
}