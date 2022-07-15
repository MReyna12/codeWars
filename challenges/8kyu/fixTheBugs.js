function myFirstKata(a, b) {
  return typeof a != "number" || typeof b != "number"
    ? false
    : (a % b) + (b % a);
}
