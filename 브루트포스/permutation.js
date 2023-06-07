const permutation = (arr) => {
  const result = [];

  // DFS
  const dfs = (i, arr) => {
    // base condition
    if (i == arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      // swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      // dfs

      dfs(i + 1, arr);
      // swap back
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);
  return result;
};

console.log(permutation(['a', 'b', 'c']));
