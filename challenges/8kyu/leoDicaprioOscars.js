function leo(oscar) {
  let response = "";
  if (oscar === 88) {
    response = "Leo finally won the oscar! Leo is happy";
  } else if (oscar === 86) {
    response = "Not even for Wolf of wallstreet?!";
  } else if (oscar > 88) {
    response = "Leo got one already!";
  } else {
    response = "When will you give Leo an Oscar?";
  }
  return response;
}
