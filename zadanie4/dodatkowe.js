function binarySearch(list, start, end, target){
    if (start > end) {
        return 'wtf';
    }

    let middle = Math.floor((start + end)/2);

    if(list[middle] === target){
        return `Found target at index ${middle}`;

    }

    if(arr[middle] > target){
        return binarySearch(list, start, middle - 1, target);
    }

    if(arr[middle] < target){
        return binarySearch(list, middle + 1, end, target);
    }
}

arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(binarySearch(arr, 0, 20, 15))