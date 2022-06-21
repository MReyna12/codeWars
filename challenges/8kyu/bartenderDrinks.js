function getDrinkByProfession(param) {
  const lowerCaseParam = param.toLowerCase();
  const drinks = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };
  if (drinks[lowerCaseParam]) {
    return drinks[lowerCaseParam];
  } else {
    return "Beer";
  }
}
