//  In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
//  If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
//  If there are no good ideas, as is often the case, return 'Fail!'.

// Function declaration; forEach method; if conditional; ternary operator
function well(x) {
  let goodIdeas = 0;
  x.forEach(word => {
    if (word === 'good') {
      goodIdeas += 1;
    }
  });
  return goodIdeas > 0 && goodIdeas < 3 ? 'Publish!' : goodIdeas > 2 ? 'I smell a series!' : 'Fail!';
}