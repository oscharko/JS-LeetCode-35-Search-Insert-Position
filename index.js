let nums = [1, 3, 5, 6], target = 2

const searchInsert = function(nums, target) {

  /*
  # Description for array v:
  #   - v[0] = input array and also pointer right
  #   - v[1] = pointer left
  #   - v[2] = middle element of the input array ((v[0].length - v[1]) / 2)
  #   - v[4] = input target
  */
  let v = [nums, 0, 0, target]
  while (v[1] < v[0].length) {
    v[2] = v[1] + Math.floor((v[0].length - v[1]) / 2)
    if (nums[v[2]] === v[3]) {
      return v[2]
    } else if (nums[v[2]] > v[3]) {
      v[0].length = v[2]
    } else {
      v[1] = v[2] + 1
    }
  }
  return v[1]

};



console.log(searchInsert(nums, target))