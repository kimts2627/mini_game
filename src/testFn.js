export const playerOneFn = () => {

  let ships = [
    {
      headPosition: [2, 10],
      tailDirection: 'top',
    },
    {
      headPosition: [4, 4],
      tailDirection: 'left',
    },
    {
      headPosition: [12, 3],
      tailDirection: 'top',
    },
    {
      headPosition: [17, 15],
      tailDirection: 'left',
    },
    {
      headPosition: [6, 1],
      tailDirection: 'left',
    },
  ];
  let scripts = [
    {
      shoot: [4, 1]
    },
    {
      shoot: [4, 2]
    },
    {
      shoot: [16, 13]
    },
    {
      shoot: [0, 17]
    },
    {
      shoot: [12, 14]
    },
    {
      shoot: [9, 5]
    },
    {
      shoot: [15, 16]
    },
    {
      shoot: [18, 19]
    },
    {
      shoot: [7, 0]
    },
    {
      shoot: [8, 1]
    },
  ];



  return {
    ships,
    scripts,
  };
}

export const playerTwoFn = () => {
  let ships = [
    {
      headPosition: [15, 3],
      tailDirection: 'top',
    },
    {
      headPosition: [10, 4],
      tailDirection: 'left',
    },
    {
      headPosition: [10, 2],
      tailDirection: 'top',
    },
    {
      headPosition: [9, 12],
      tailDirection: 'left',
    },
    {
      headPosition: [5, 12],
      tailDirection: 'left',
    },
  ];
  let scripts = [
    {
      shoot: [7, 5]
    },
    {
      shoot: [14, 10]
    },
    {
      shoot: [10, 16]
    },
    {
      shoot: [0, 17]
    },
    {
      shoot: [12, 14]
    },
    {
      shoot: [9, 5]
    },
    {
      shoot: [15, 16]
    },
    {
      shoot: [18, 19]
    },
    {
      shoot: [7, 0]
    },
    {
      shoot: [8, 1]
    },
  ];



  return {
    ships,
    scripts,
  };
}